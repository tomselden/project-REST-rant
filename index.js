require('dotenv').config()
const express = require('express')
const app = express()

app.use('controllers/places.js', require('controllers\places.js'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)