const express = require('express');
const cors = require('cors');
const {randomBytes} = require('crypto');

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
 comments.push({id: commentId, content})

 commentsByPostId[req.params.id] = comments

 await axios.post('http://localhost:4005/events', {
  type: "CommentCreated",
  data: {
    id: commentId,
    content,
    postId: req.params.id
  }
 })

 res.status(201).send(comments)

})

app.listen(4001, () => {
    console.log('Listening on port: 4001')
})