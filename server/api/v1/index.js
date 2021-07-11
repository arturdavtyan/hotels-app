const express = require('express')
const app = express()

// /api/v1/hotels
app.use('/hotels', require('./hotels'))

// /api/v1/feedback
app.use('/feedback', require('./feedback'))

module.exports = app
