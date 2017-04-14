const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database);

// On Successul Connection to Database
mongoose.connection.on('connected', ()=>{
  console.log('Connected to database ' + config.database);
});

// Error Connecting To Database
mongoose.connection.on('error', (err)=>{
  console.log('Database error: ' + err);
});

const app = express();

// Routes
const users = require('./routes/users');

const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', users);

// Index Route
app.get('/', (req,res)=>{
  res.send('Invalid endpoint /');
});

// Start Server
app.listen(port, ()=>{
  console.log('server started at ' + port)
});
