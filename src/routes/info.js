const express = require('express');
const router = express.Router();

const infoController = require('../app/controllers/InfoController');

router.use('/', infoController.index);

module.exports = router;
