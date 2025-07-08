const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/restored/product', meController.control);
router.get('/', meController.index);

module.exports = router;
