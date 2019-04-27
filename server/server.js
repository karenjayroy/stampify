const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');



app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
})

// Signup for new user account
app.post('/signup', (req, res) => {
  res.send();
});

// User Login
app.post('/userlogin', (req, res) => {
  res.send();
});

// Store Login
app.post('/storelogin', (req, res) => {
  res.send();
});

app.get('/usercards', (req, res) => {
  res.send();
});

// Add stamp to user card by phone #
app.put('/stamp/:phone', (req, res) => {
  res.send();
});

// Add store to user's cards
app.post('/store/:store', (req, res) => {
  res.send();
})


app.listen(3000);
