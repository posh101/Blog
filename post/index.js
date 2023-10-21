const express = require('express');
const cors = require('cors');
const axios = require('axios');
const {randomBytes} = require('crypto')

const app = express();

app.use(cors());
app.use(express.json());

const posts = {};

app.get('/post', (req, res) => {
 res.send(posts)
});

app.post('/post', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body

  posts[id] = {
    id, 
    title
  }

  res.status(201).send(posts[id])
});

app.listen(4000, () => {
    console.log('Listening on port: 4000')
})