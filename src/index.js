'use strict';

const express = require('express');
const cors = require('cors');

const { subjectList } = require('./data');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send(
    `<h1>Sdamgia Homework Backend</h1>
    <a href="./api/">API</a>`
  );
});

app.get('/api/', (req, res) => {
  res.send(
    `<h1>Sdamgia Homework Backend API</h1>
    <a href="./search">Search</a>`
  );
});

app.get('/api/search', (req, res) => {
  const { query } = req.query;
  if (!query) res.json(null);
  const subjectQuery = query.toLowerCase();

  let subject = null;

  for (let i = 0; i < subjectList.length; i++) {
    const subjectItem = subjectList[i];
    const title = subjectItem.title.toLowerCase();

    if (title.includes(subjectQuery)) {
      subject = subjectItem;

      break;
    }
  }

  res.json({
    subject,
  });
});

app.listen(PORT);
