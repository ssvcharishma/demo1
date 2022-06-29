const express = require('express')
const app = express()

app.get('/json', (req, res, next) => {
    const data = {
        greeting: 'hello world'
    }
    res.json(data)
})

app.listen(3000)