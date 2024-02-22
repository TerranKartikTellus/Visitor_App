const express = require('express');
const redis = require('redis');
const myHandler = require('./Endpoint_CallBack/GET/visits/index.js');

const client = redis.createClient();

const app = express();

app.get('/', (req, res) => {
  myHandler(client)(req, res); // Pass client to myHandler
});

app.listen(8082, () => {
  console.log('Listening at port: 8082:');
});
