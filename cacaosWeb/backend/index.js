const express = require('express')
const cors = require('cors')
const { connect } = require('mongoose')
const debug = require('debug')('app')
const chalk = require('chalk')
const morgan = require('morgan')
require('dotenv').config()
const port = process.env.PORT

connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
const cacaoRoutes = require('../backend/src/routes/cacaosRouter')

app.use('/api/cacaos', cacaoRoutes)

app.listen(
  port,
  () => debug(`Server is running on ${chalk.yellow(`http://localhost:${port}`)}`)
)
