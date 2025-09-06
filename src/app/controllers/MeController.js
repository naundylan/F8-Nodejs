const product = require('../../models/product');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    index(req, res) {
        res.send('Đây là trang me');
    }

    // GET /me/stored/products
    async control(req, res, next) {
        
        let productQuery = product.find({ deleted: false })

        if( '_sort' in req.query ) {
            const sortObject = {};
            const sortColumn = req.query.column;
            const sortType = req.query.type === 'desc' ? -1 : 1;
            sortObject[sortColumn] = sortType;
            productQuery = productQuery.sort(sortObject);
        }

        try {
            const [products, deletedCount] = await Promise.all([
                productQuery,
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
