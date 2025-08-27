const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');

router.post('/store', productController.store);
router.get('/create', productController.create);
router.get('/:id/edit', productController.edit);
router.post('/handle-form-actions', productController.handleFormAction);
router.delete('/:id', productController.delete);
router.delete('/:id/force', productController.forceDelete);
router.patch('/:id/restore', productController.restore);
router.put('/:id', productController.update);
router.get('/:slug', productController.show);
router.get('/', productController.index);

module.exports = router;
