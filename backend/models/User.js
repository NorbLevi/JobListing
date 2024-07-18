const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['individual', 'company'],
    required: true
  },
  companyName: {
    type: String,
    required: function() {
      return this.role === 'company';
    },
    unique: function() {
      return this.role === 'company';
    }
  },
  position: String,
  type: String,
  address: String,
  location: String,
  city: String,
  industry: String
});

// Password hashing middleware
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
