const product = require('../../models/product');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // GET /
    async index(req, res) {
        try {
            const products = await product.find({}); // Sử dụng await thay vì callback
            // const prod = products.map(item => item.toObject())
            res.render('home', {
                prod: mutipleMongooseToObject(products),
            }); // Đảm bảo truyền đúng object với key 'products'
        } catch (err) {
            console.error('Error fetching products:', err);
            res.status(400).json({ error: 'ERROR!!!' });
        }
    }

    // GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
