const express = require('express');
const cors = require('cors');
const {randomBytes} = require('crypto')
const morgan = require('morgan')
const axios = require('axios')

const app = express();

app.use(cors());
app.use(morgan('combined'))
app.use(express.json());

const posts = {};

app.get('/posts', (req, res) => {
 res.send(posts)
});

app.post('/posts', async(req, res) => {

  const id = randomBytes(4).toString('hex')
  const { title } = req.body

  posts[id] = {
    id, 
    title
  }
try {
  
  await axios.post('http://localhost:4005/events', {
  type: "PostCreated",
  data: {
    id, title
  }
})
}catch(error) {
  console.log(error.message)
}

app.post('/events', (req, res) => {
  console.log('event recieved:', req.body.type)

  res.send({})
})

  res.status(201).send(posts[id])


});

app.listen(4000, () => {
   console.log('v55')
    console.log('Listening on port: 4000')
})