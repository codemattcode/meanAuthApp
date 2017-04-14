const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Index route
app.get('/', (req,res)=>{
  res.send('Invalid endpoint /');
});

// Start server
app.listen(port, ()=>{
  console.log('server started at ' + port)
});
