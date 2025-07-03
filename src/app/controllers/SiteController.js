const product = require('../../models/product');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // GET /
    index(req, res) {
        res.render('home');
    }

    // GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
