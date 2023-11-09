const express = require('express')
const cors = require('cors')
const axios = require("axios")

const app = express();

app.use(cors())
app.use(express.json())

app.post('/events', async(req, res) => {

    const events = []

    const {event} = req.body

    events.push(event)

       try {
        await axios.post('http://localhost:4000/events', event)
       }catch(error) {
        console.log(error.message)
       }
        
       try {
        await axios.post('http://localhost:4001/events', event)
       }catch(err) {
        console.log(err.msg)
       }

        try {
        await axios.post('http://localhost:4002/events', event)
        }catch(err) {
        console.log(err.msg)
        }
        
        try {
        await axios.post('http://localhost:4003/events', event)
        }catch{err} {
            console.log(err.msg)
        }
        
    res.send({status: "Ok"})
})

app.get('/events', (req, res) => {
    res.send(events)
})


app.listen(4005, () => {
    console.log('Listening on port: 4005')
})