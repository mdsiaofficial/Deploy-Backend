require('dotenv').config();
const express = require('express');

// import express from 'express';

const app = express();
// const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello');
})

app.get(`/twitter`, (req, res) => {
  res.send(`Twitter`);
})

app.get(`/login`, (req, res) => {
  res.send(`<h1>Please login</h1>`)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
