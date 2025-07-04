const product = require('../../models/product');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const slugify = require('slugify');

class ProductController {
    // POST /store
    store(req, res) {
        // res.json(req.body)
        const data = req.body;
        data.slug = slugify(data.title, { lower: true });
        const docs = new product(data);
        docs.save()
            .then(() => res.render('products/store'))
            .catch((err) => res.send(err));
    }

    // GET /create
    create(req, res) {
        res.render('products/create');
    }

    // GET /:slug
    show(req, res, next) {
        product
            .findOne({ slug: req.params.slug })
            .then((prod) => {
                res.render('products/show', { prod: mongooseToObject(prod) });
            })
            .catch(next);
        // res.send('COURSE DETAIL!! - ' + req.params.slug)
    }

    // GET /
    async index(req, res) {
        try {
            const products = await product.find({}); // Sử dụng await thay vì callback
            // const prod = products.map(item => item.toObject())
            res.render('product', {
                prod: mutipleMongooseToObject(products),
            }); // Đảm bảo truyền đúng object với key 'products'
        } catch (err) {
            console.error('Error fetching products:', err);
            res.status(400).json({ error: 'ERROR!!!' });
        }
    }
}

module.exports = new ProductController();
