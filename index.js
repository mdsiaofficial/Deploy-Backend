require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


const githubDATA = {
  message: 'Github Data',
  name: "Ashiq",
  email: "Ashiq",
  password: "123",
}
app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/twitter', (req, res) => {
  res.send('Twitter');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login</h1>');
});

app.get('/github', (req, res) => {
  res.json(githubDATA);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

