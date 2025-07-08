const info = require('./info');
const site = require('./site');
const product = require('./product');
const me = require('./me');

function route(app) {
    // info
    app.use('/info', info);
    // app.post('/info', (req, res) => {
    //     console.log(req.body);
    //     res.render('info')
    // })

    app.use('/me', me);

    app.use('/product', product);

    // home search
    app.use('/', site);
}

module.exports = route;
