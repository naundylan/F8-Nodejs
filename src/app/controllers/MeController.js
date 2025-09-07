const product = require('../../models/product');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    index(req, res) {
        res.send('Đây là trang me');
    }

    // GET /me/stored/products
    async control(req, res, next) {
        try {
            const [products, deletedCount] = await Promise.all([
                product.find({ deleted: false }).sortable(req),
                product.countDocumentsWithDeleted({ deleted: true })
            ]);

            // console.log(deletedCount)

            res.render('me/store-product', {
                deletedCount,
                products: mutipleMongooseToObject(products),
            })
        } catch (error) {
            next(error);
        }
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
