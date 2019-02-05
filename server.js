const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000
const cors = require('cors')
const logger = require('morgan')
const routes = require('./config/routes')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routes)

app.listen(port, function() {
  console.log('listening on port: ', port)
})
