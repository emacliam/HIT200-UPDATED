const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()

mongoose.connect(process.env.DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
},
err => {
  if (err) {
    console.log(err)
  } else {
    console.log('connected to mongo db')
  }
})
// middlwware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const applyBusiness = require('./routes/applybusiness')
const accessCodes = require('./routes/AccessCodes')
const authRoute = require('./routes/auth')
const paymentRoute = require('./routes/payment')
const ProductRoute = require('./routes/products')
const GalleryRoute = require('./routes/Images')

app.use('/api', applyBusiness)
app.use('/api', accessCodes)
app.use('/api', authRoute)
app.use('/api', paymentRoute)
app.use('/api', ProductRoute)
app.use('/api', GalleryRoute)

app.listen(3000, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('connected on port 3005 ')
  }
})
