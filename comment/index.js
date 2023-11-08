const express = require('express');
const cors = require('cors');
const {randomBytes} = require('crypto');
const axios = require('axios')

const app = express();

app.use(cors());
app.use(express.json());

const commentsByPostId = {};

app.get('/post/:id/comments', (req, res) => {    
  res.send(commentsByPostId[req.params.id])
})

app.post('/post/:id/comments', async (req, res) => {

 const commentId = randomBytes(4).toString('hex')
 const {content} = req.body

 const comments = commentsByPostId[req.params.id] || []
 comments.push({id: commentId, content, status: 'pending'})

 commentsByPostId[req.params.id] = comments

 try {
  await axios.post('http://localhost:4005/events', {
  type: "CommentCreated",
  data: {
    id: commentId,
    content,
    postId: req.params.id,
    status: 'pending'
  }
 })
 }catch(error) {
  console.log(error.message)
 }

 res.status(201).send(comments)

})

app.post('/events', async(req, res) => {
  console.log('event recieved:', req.body.type)

  const {postId, id, status, content} = req.body

  const comments = commentsByPostId

  const comment = comments.find(comment => {
    return comment.id === id
  })

  comment.status = status

  try {
    await axios.post('http://localhost:4005/events', {
      type: 'CommentUpdated',
      data: {
        postId,
        id,
        status,
        content
      }
    })
  }catch(err) {
    console.log(err.msg)
  }

  res.send({})
})

app.listen(4001, () => {
    console.log('Listening on port: 4001')
})