const express = require('express');
const cors = require('cors');
const axios = require('axios');
const {randomBytes} = require('crypto')
const morgan = require('morgan')

const app = express();

app.use(cors());
app.use(morgan('tiny'))
app.use(express.json());

const posts = {};

app.get('/post', (req, res) => {
 res.send(posts)
});

app.post('/post', async(req, res) => {
 try {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body

  posts[id] = {
    id, 
    title
  }

  await fetch('http://locahhost:4005', {
    method: 'POST',
    type: "PostCreated",
    data: {
      id,
      title
    }
  })

  res.status(201).send(posts[id])

 }catch(error) {
  console.log(error.msg)
 }
});

app.listen(4000, () => {
    console.log('Listening on port: 4000')
})