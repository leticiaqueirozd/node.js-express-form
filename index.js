const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3010;
const path = require('path');

let vetor = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

app.get('/', (req, res) => {
  res.send('Olá Mundo!');
});

app.post('/vetor', (req, res) => {
  vetor.push(req.body.value);
  res.sendStatus(200);
});

app.get('/vetor', (req, res) => {
  res.json(vetor);
});

app.get('/index', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
