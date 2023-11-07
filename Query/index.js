const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express();

app.use(cors())
app.use(express.json())

const posts = {}

app.get('/posts', (req, res) => {
 res.send(posts)
})

app.post('/events', (req, res) => {
    const {type, data} = req.body

    if(type === 'PostCreated') {
        const {title, id} = data

        posts[id] = {id, title, comments: []}
    }

    if(type === 'CommentCreated') {
        const {id, content, postId} = data;

        const post = posts[postId]

        post.comments.push({id, content})
    }

    res.status(201).send({})
})

app.listen(4002, () => {
    console.log('Listening on port: 4002')
})