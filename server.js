const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const AuthRoute = require('./routes/AuthRoute')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRoute)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
