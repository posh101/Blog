const express = require('express')
const axios = require('axios')
const cors = require('cors')
const morgan = require('morgan')

const app = express();

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

const posts = {}

app.get('/post', () => {
  res.send(posts)
})

app.post('/events', () => {
    const {type, data} = req.body

    if(type === 'PostCreated') {
        const {id, title} = data

        posts[id] = {id, title, comments: []}

    }

    if(type === 'CommentCreated') {
        const {id, content, postId} = data

        const post = posts[postId]
        post.comments.push({id, content})
    }

    console.log(posts)
        
    res.send({})
})

app.listen(4002, () => {
    console.log('Listening on post: 4002')
})