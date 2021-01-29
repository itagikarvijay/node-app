const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: String,
        rate: Number
    },{collection: 'Product'}
)

module.exports = mongoose.model('Product', productSchema)