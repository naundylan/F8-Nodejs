const product = require('../../models/product');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    index(req, res) {
        res.send('Đây là trang me');
    }

    async control(req, res) {
        const products = await product.find({});
        res.render('me/store-product', {
            products: mutipleMongooseToObject(products),
        });
    }
}

module.exports = new MeController();
