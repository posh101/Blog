const express = require('express');
const cors = require('cors');
const {randomBytes} = require('crypto')
const morgan = require('morgan')

const app = express();

app.use(cors());
app.use(morgan('tiny'))
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

  await axios.post('http://localhost:4005/events', {
  method: "POST",
  type: "PostCreated",
  data: {
    id, title
  }
})

  res.status(201).send(posts[id])
  console.log(posts)

});

app.listen(4000, () => {
    console.log('Listening on port: 4000')
})