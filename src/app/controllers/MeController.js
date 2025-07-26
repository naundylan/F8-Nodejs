const product = require('../../models/product');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    index(req, res) {
        res.send('Đây là trang me');
    }

    // GET /me/stored/products
    async control(req, res) {
        const products = await product.find({ deleted: false });
        res.render('me/store-product', {
            products: mutipleMongooseToObject(products),
        });
    }

    // GET /me/trash/products
    async trash(req, res, next) {
        const products = await product.findWithDeleted({ deleted: true });
        res.render('me/trash-product', {
            products: mutipleMongooseToObject(products),
        });
    }
}

module.exports = new MeController();
