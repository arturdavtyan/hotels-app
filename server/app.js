const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')
require('dotenv/config')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(logger('dev'/*, { skip: (req, res) => res.statusCode < 400 }*/))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

process.env.API_VERSIONS
  .split(',')
  .map(v => app.use(`/api/${v}/`, require(`./api/${v}`)))

// Running server
app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`))