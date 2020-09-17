'use strict';

const express = require(`express`);

const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT);
