const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express();

app.use(cors())
app.use(express.json())

app.post('/events', async (req, res) => {
 const {type, data} = req.body

 const status = data.content.includes('orange') ? 'rejected' : 'approved'

 try {
    await axios.post('http://localhost:4005/events', {
    type: "CommentModerated",
    data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content
    }
 })
 }catch(error) {
    console.log(error.message)
 }

 res.send({})
})

app.listen(4003, () => {
    console.log('Listening on port: 4003')
})