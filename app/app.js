const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello 12 Factor App Demo!');
});

app.listen(3000, function () {
  console.log('12FactorDemoApp listening on port 3000!');
});