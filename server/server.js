const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const loyalty = require('../database/queryController.js');



app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
})



// Signup for new user account *done* postman works
app.post('/signup', loyalty.addUser, (req, res) => {
  res.send(res.locals.addUser[0]);
});

// User Login *done* postman works
app.post('/userlogin', loyalty.userLogin, (req, res) => {
  res.send(res.locals.user.rows[0]);
});

// Store Login *done* postman works
app.post('/storelogin', loyalty.storeLogin, (req, res) => {
  res.send(res.locals.store.rows[0]);
});

// get stamp counts *done* postman works
app.get('/usercards', loyalty.stampCount, (req, res) => {
  res.send(res.locals.stamps.rows);
});

// Add stamp to user card by phone #
app.put('/stamp/:phone', loyalty.addStamp, (req, res) => {
  res.send(res.locals.stampCount);
});

// Add store to user's cards *done*
app.post('/store/:store', loyalty.addCard, (req, res) => {
  res.send(res.locals.userCard);
})


app.listen(3000);
