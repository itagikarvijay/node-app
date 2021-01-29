const Product = require('../models/product-model')
require('dotenv').config()

getProduct = async (req, res) => {
    await Product.find({}, (err, doc) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (doc === null) {
            return res
                .status(404)
                .json({ success: false, error: `Product not found` })
        }
        console.log(process.env.SECRET_KEY)
        return res.status(200).json({ success: true, data: doc })
    }).catch(err => console.log(err))
}

saveProduct = async (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a product',
        })
    }
    const product = new Product(body)
    if (!product) {
        return res.status(400).json({ success: false, error: err })
    }
    console.log(product);
    await product
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: product._id,
                message: 'Product created!',
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(400).json({
                error,
                message: 'Product not created!',
            })
        })
}

module.exports = {
    getProduct,
    saveProduct
}