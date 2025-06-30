const info = require('./info');
const site = require('./site');

            function route(app) {
                // info
                app.use('/info', info);
                // app.post('/info', (req, res) => {
                //     console.log(req.body);
                //     res.render('info')
                // })

                // home search
                app.use('/', site);
            }

module.exports = route;
