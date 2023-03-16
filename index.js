const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

let vetor = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json);

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

app.get('/form', (req, res) => {
  res.sendFile(path.resolve('pages/form.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
