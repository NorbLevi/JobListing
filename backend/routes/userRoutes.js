const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register route
router.post('/register', async (req, res) => {
  const { name, email, password, role, companyName, position, type, address, location, city, industry } = req.body;

  console.log("Register request body:", req.body); // Log the request body

  try {
    if (role === 'company' && companyName) {
      const existingCompany = await User.findOne({ companyName });
      if (existingCompany) {
        return res.status(400).json({ message: 'Company already registered' });
      }
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      companyName: role === 'company' ? companyName : undefined,
      position: role === 'company' ? position : undefined,
      type: role === 'company' ? type : undefined,
      address: role === 'company' ? address : undefined,
      location: role === 'company' ? location : undefined,
      city: role === 'company' ? city : undefined,
      industry: role === 'company' ? industry : undefined
    });

    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.status(201).json({ token });
  } catch (error) {
    console.error("Register error:", error); // Log the error
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log("Login request body:", req.body); // Log the request body

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.status(200).json({ token, role: user.role });
  } catch (error) {
    console.error("Login error:", error); // Log the error
    res.status(500).json({ message: 'Error logging in' });
  }
});

module.exports = router;
