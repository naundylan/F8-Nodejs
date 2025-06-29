const info = require('./info')
const home = require('./home')
const search = require('./search')

function route(app) {
    // home
    app.get('/', home)

    // info
    app.get('/info', info)
    // app.post('/info', (req, res) => {
    //     console.log(req.body);
    //     res.render('info')
    // })

    // search
    app.get('/search', search)
}

module.exports = route