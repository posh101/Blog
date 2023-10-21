const express = require('express');
const cors = require('cors');
const axios = require('axios');
const {randomBytes} = require('crypto')

const app = express();

app.use(cors());
app.use(express.json());

const post = {};

app.get('/post', (req, res) => {

});

app.post('/post', (req, res) => {
  const { title } = req.body

  const id = randomBytes(4).toString('hex')
});

app.listen(4000, () => {
    console.log('Listening on port: 4000')
})