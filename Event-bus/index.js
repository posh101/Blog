const express = require('express')
const cors = require('cors')
const axios = require("axios")

const app = express();

app.use(cors())
app.use(express.json())

app.post('/events', (req, res) => {

    const {event} = req.body

    try {
        axios.post('http://localhost:4000/posts/events', event)
    }catch(error) {
        console.log(error)
    }

    try {
        axios.post('http://localhost:4001/posts/events', event)
    }catch(error) {
        console.log(error)
    }

    try {
        axios.post('http://localhost:4002/posts/events', event)
    }catch(error) {
        console.log(error)
    }

    res.send({status: "Ok"})
})


app.listen(4005, () => {
    console.log('Listening on port: 4005')
})