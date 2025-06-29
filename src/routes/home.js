const express = require('express')
const router = express.Router()

const homeController = require('../app/controllers/homeController')

router.use('/', homeController.index)

module.exports = router