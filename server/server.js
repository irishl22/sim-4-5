const express = require('express')
require('dotenv').config()
const massive = require('massive')
const ctrl = require('./controllers/controller')


const app = express()

const { CONNECTION_STRING, SERVER_PORT } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db set')
})

app.use(express.json())


app.get('/api/houses', ctrl.read)
app.post('/api/house', ctrl.create)
app.delete('/api/house/:id', ctrl.delete)



app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))