const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/products', meController.control);
router.get('/trash/products', meController.trash);
router.get('/', meController.index);

module.exports = router;
