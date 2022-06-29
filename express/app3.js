const express = require('express')
const path = require('path')
const hoganmiddleware = require('hogan-middleware')
const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganmiddleware.__express)
app.get('/', (req, res, next) => {
    res.send('hello!')
})
app.get('/json', (req, res, next) => {
    const data = {
        greeting: 'hello world'
    }
    res.json(data)
})
app.get('/home', (req, res, next) => {
    res.render('home', null)
})

app.listen(3000)