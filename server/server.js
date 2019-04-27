const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const loyalty = require('./../database/querycontroller');



app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
})

// Signup for new user account *done*
app.post('/signup', loyalty.addUser, (req, res) => {
  res.send(res.locals.addUser);
});

// User Login *done* how to send data back.
app.post('/userlogin', loyalty.userLogin, (req, res) => {
  res.send('Welcome back loyal customer');
});

// Store Login *done* need to send data back
app.post('/storelogin', (req, res) => {
  res.send('Welcome back!');
});

// get stamp counts 
app.get('/usercards', (req, res) => {
  res.send();
});

// Add stamp to user card by phone #
app.put('/stamp/:phone', (req, res) => {
  res.send();
});

// Add store to user's cards !figure out using params!
app.post('/store/:store', loyalty.addCard, (req, res) => {
  res.send(res.locals.userCard);
})


app.listen(3000);
