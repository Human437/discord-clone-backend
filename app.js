require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV, DB_URL } = require('./config')

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'dev';

// middlewares
app.use(express.json())
app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

// db config
const mongoURL = DB_URL
mongoose.connect(mongoURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.get('/', (req,res) => res.status(200).send("Hello World!"))

module.exports = app