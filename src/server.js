const express = require('express');
const app = express();

const mixer = [
  {
    id: 1,
    lastname: 'Niemann',
    firstname: 'Markus',
    email: 'markus@uhlenmixer.de',
  },
  {
    id: 2,
    lastname: 'Niemann',
    firstname: 'Mads',
    email: 'maflenie@gmail.com',
  },
  {
    id: 3,
    lastname: 'Niemann',
    firstname: 'Jannes Mikkel',
    email: 'jamiknie@gmail.com',
  },
  {
    id: 4,
    lastname: 'Niemann',
    firstname: 'Barbara',
    email: 'ilkstraat13a@gmail.com',
  },
];

app.get('/hello', function (req, res) {
  res.status(200).json('Hello World!');
});

app.get('/niemann', function (req, res) {
  res.status(200).send(mixer);
});

const port = process.env.SERVER_PORT || 7001;

app.listen(port, () => {
  console.log(`
    📞    Uhlenmixer API Server listening on port ${port}
    👉    Try http://localhost:${port}/hello
`);
});
