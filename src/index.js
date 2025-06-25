const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000
const {engine} = require('express-handlebars')

app.use(morgan("combined"))


// template engine

app.engine('hb', engine({
    extname: '.hb'
}));
app.set('view engine', 'hb');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/info', (req, res) => {
    res.render('info')
})

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))