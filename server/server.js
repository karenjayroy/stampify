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


app.listen(3000);
