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
                product.find({ deleted: false }), // .lean() giúp lấy plain JavaScript objects nhanh hơn
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

        // Promise.all(([product.find({}), product.countDocumentsWithDeleted({ deleted: true })]))
        //     .then(([products, deletedCount]) =>
        //         res.render('me/store-courses', {
        //             deletedCount,
        //             products: mutipleMongooseTo0bject(products),
        //         })
        //     )
        //     .catch(next);

        // product.countDocumentsWithDeleted({ deleted: true })
        //     .then(count => res.render('me/store-product', {
            
        //     }))
        //     .catch(err => console.error(err));



        // const products = await product.find({ deleted: false });
        // res.render('me/store-product', {
        //     products: mutipleMongooseToObject(products),
        // });
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
