const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const product = new Schema(
    {
        title: { type: String, min: 50, require: true },
        description: { type: String, max: 255 },
        price: { type: Number, default: 0, require: true },
        slug: { type: String, max: 100 },
        image: { type: String, max: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Product', product, 'products');
