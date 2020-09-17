'use strict';

const express = require(`express`);

const PORT = process.env.PORT || 4000;

const app = express();

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
  const query = req.query.query.toLowerCase();

  const subjectList = [
    {
      name: 'math',
      title: 'Математика профильная',
    },
    {
      name: 'mathb',
      title: 'Математика базовая',
    },
    {
      name: 'inf',
      title: 'Информатика',
    },
    {
      name: 'rus',
      title: 'Русский язык',
    },
    {
      name: 'en',
      title: 'Английский язык',
    },
    {
      name: 'de',
      title: 'Немецкий язык',
    },
    {
      name: 'fr',
      title: 'Французcкий язык',
    },
    {
      name: 'sp',
      title: 'Испанский язык',
    },
    {
      name: 'phys',
      title: 'Физика',
    },
    {
      name: 'chem',
      title: 'Химия',
    },
    {
      name: 'bio',
      title: 'Биология',
    },
    {
      name: 'geo',
      title: 'География',
    },
    {
      name: 'soc',
      title: 'Обществознание',
    },
    {
      name: 'lit',
      title: 'Литература',
    },
    {
      name: 'hist',
      title: 'История',
    },
  ];

  let subject = null;

  for (let i = 0; i < subjectList.length; i++) {
    const subjectItem = subjectList[i];
    const { title } = subjectItem;

    if (title.toLowerCase().includes(query)) {
      subject = subjectItem;

      break;
    }
  }

  const result = {
    subject,
  };

  res.json(result);
});

app.listen(PORT);
