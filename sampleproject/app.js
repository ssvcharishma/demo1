// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')

const app = express() // initialize app

/*  Apps are configured with settings as shown in the conig object below.
    Options include setting views directory, static assets directory,
    and database settings. Default config settings can be seen here:
    https://docs.turbo360.co */

const config = {
    views: 'views', // Set views directory
    static: 'public', // Set static assets directory
    logging: true,

    /*  To use the Turbo 360 CMS, from the terminal run
        $ turbo extend cms
        then uncomment line 21 below: */

    // db: vertex.nedb()
}

vertex.configureApp(app, config)
app.use((req, res, next) => {
    const timestamp = new Date()
    req.timestamp = timestamp.toString()
    next()
})

// import routes
const index = require('./routes/index')
const register = require('./routes/register')

// set routes
app.use('/', index)
app.use('/register', register)


module.exports = app