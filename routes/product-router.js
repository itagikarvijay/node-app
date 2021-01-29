const express = require('express')

const productCtrl = require('../controllers/product-ctrl');

const router = express.Router();

router.post('/save', productCtrl.saveProduct)
router.get('/findOne', productCtrl.getProduct)

module.exports = router