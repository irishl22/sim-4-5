const express = require('express')
require('dotenv').config()
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controllers/controller')


const app = express()

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db set')
})

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

app.get('/api/houses', ctrl.read)
app.post('/api/house', ctrl.create)




app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))