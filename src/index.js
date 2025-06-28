const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000
const {engine} = require('express-handlebars')

// app.use(morgan("combined"))

// static file
app.use(express.static(path.join(__dirname, 'public')))


// template engine
app.engine('hb', engine({
    extname: '.hb'
}));
app.set('view engine', 'hb');
app.set('views', path.join(__dirname, 'resources/views'));

// home
app.get('/', (req, res) => {
    res.render('home')
})

app.post('/', (req, res) => {
    console.log(req.query);
    res.render('home')
})

// info
app.get('/info', (req, res) => {
    res.render('info')
})
app.post('/info', (req, res) => {
    console.log(req.body);
    res.render('info')
})

// search
app.get('/search', (req, res) => {
    res.render('search')
    console.log(req.query);
})

app.post('/search', (req, res) => {
    res.render('search')
    console.log(req.query);
})


app.listen(port, () => console.log(`app listening at http://localhost:${port}`))