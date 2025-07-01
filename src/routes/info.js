const express = require('express');
const router = express.Router();

const infoController = require('../app/controllers/InfoController');

router.get('/', infoController.index);

module.exports = router;
