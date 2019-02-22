const express = require('express');
const bodyParser = require('body-parser');
const api = express();

api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

const front = express();
const apiPort = 3000;
const frontPort = 8080;
front.set('view engine', 'ejs');

front.get('/', (req, res) => {
  res.render('02_advanced');
});

api.get('/hello', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.send(JSON.stringify({result: 'hello !'}));
});

api.listen(apiPort, () => {
  console.log(`API Server started on apiPort http://localhost:${apiPort}`);
});

front.listen(frontPort, () => {
  console.log(`Front Server started on apiPort http://localhost:${frontPort}`);
});
