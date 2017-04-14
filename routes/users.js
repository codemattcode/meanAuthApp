const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// Register
router.post('/register', (req,res,next)=>{
  // res.send('REGISTER');
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
});

// Authenticate
router.post('/authenticate', (req,res,next)=>{
  res.send('AUTHENTICATE');
});

// Profile
router.get('/profile', (req,res,next)=>{
  res.send('PROFILE');
});

// Validate (only for testing)
// router.get('/validate', (req,res,next)=>{
//   res.send('VALIDATE');
// });

module.exports = router;
