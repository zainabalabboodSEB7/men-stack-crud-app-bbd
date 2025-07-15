const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const morgan = require('morgan')

// CONTROLLERS
const businessController = require('./controllers/businessController')

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(morgan('dev'))

// GET / (home)
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// ROUTES
app.use('/businesses', businessController)

app.listen(3000, () => {
    console.log('Listening on port 3000')
})