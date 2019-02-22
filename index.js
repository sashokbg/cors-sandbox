const express = require('express');
const bodyParser = require('body-parser');
const api = express();

api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

const front = express();
const apiPort = 3000;
const frontPort = 8080;
front.set('view engine', 'ejs')

front.get('/', (req, res) => {
  res.render('home');
});

api.get('/get-no-cors', (req, res) => {
  res.send('GET with no cors');
});

api.get('/get-with-cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.send({
    body: 'Hello with CORS'
  });
});

api.put('/put-no-cors', (req, res) => {
  console.log(JSON.stringify(res.body));

  res.send({
    body: `You sent: ${JSON.stringify(res.body.message)}`
  });
});

api.put('/put-with-cors', (req, res) => {
  console.log(JSON.stringify(req.body));

  res.send({
    body: `You sent: ${JSON.stringify(req.body.data)}`
  });
});

api.options('/put-with-cors', (req, res) => {
  res.set('Access-Control-Allow-Origin','http://localhost:8080');
  res.set('Access-Control-Allow-Methods','PUT');
  res.set('Access-Control-Allow-Headers','Content-Type');
  res.send();
});

api.listen(apiPort, () => {
  console.log(`API Server started on apiPort http://localhost:${apiPort}`);
});

front.listen(frontPort, () => {
  console.log(`Front Server started on apiPort http://localhost:${frontPort}`);
});
