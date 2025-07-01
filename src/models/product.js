const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const product = new Schema({
    title: { type: String, min: 50 },
    description: { type: String, max: 255 },
    price: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', product, 'products');
