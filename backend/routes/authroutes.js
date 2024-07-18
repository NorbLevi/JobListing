const express = require('express');
const passport = require('passport');
require('../services/passport'); // Ensure this path is correct

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    const token = req.user.generateAuthToken(); // Ensure this method is defined on the user model
    res.redirect(`http://your-frontend-url?token=${token}`);
});

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/' }), (req, res) => {
    const token = req.user.generateAuthToken(); // Ensure this method is defined on the user model
    res.redirect(`http://your-frontend-url?token=${token}`);
});

router.get('/linkedin', passport.authenticate('linkedin'));

router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/' }), (req, res) => {
    const token = req.user.generateAuthToken(); // Ensure this method is defined on the user model
    res.redirect(`http://your-frontend-url?token=${token}`);
});

module.exports = router;
