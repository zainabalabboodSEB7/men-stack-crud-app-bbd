const express = require('express')
const app = express()
const path = require('path')

// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')))

// GET / (home)
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})