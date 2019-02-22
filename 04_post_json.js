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
  res.render('04_post_json');
});

api.post('/save', (req, res) => {
  console.log(req.body);

  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.send({
    body: `You've sent: ${req.body.message}`
  });
});

api.listen(apiPort, () => {
  console.log(`API Server started on apiPort http://localhost:${apiPort}`);
});

front.listen(frontPort, () => {
  console.log(`Front Server started on apiPort http://localhost:${frontPort}`);
});












































