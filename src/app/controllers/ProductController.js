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
    

    // GET /:id/edit
    edit(req, res, next) {
        product
            .findOne({ _id: req.params.id })
            .then((prod) =>
                res.render('products/edit', {
                    prod: mongooseToObject(prod),
                }),
            )
            // .catch(next);
    }

    // PUT /:id
    update(req, res, next) {
        product.findByIdAndUpdate( { _id : req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/products'))
            .catch(next)
    }

    // GET /:slug
    show(req, res, next) {
        product
            .findOne({ slug: req.params.slug })
            .then((prod) => {
                res.render('products/show', { prod: mongooseToObject(prod) });
            })
            .catch(next);
    }

    // DELETE /:id
    delete(req, res, next) {
        product.delete({ _id : req.params.id})
            .then(() => res.redirect('/me/stored/products'))
            .catch(next)
    }

    // DELETE /:id/force
    forceDelete(req, res, next) {
        product.deleteOne({ _id : req.params.id})
            .then(() => res.redirect('/me/stored/products'))
            .catch(next)
    }

    // PATCH /:id/restore
    async restore(req, res, next) {
        try {
            await product.restore({ _id : req.params.id})
            res.redirect('/me/stored/products');
        } catch (err) {
            console.error('[ERROR] Restore failed:', err);
            next(err);
        }
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
