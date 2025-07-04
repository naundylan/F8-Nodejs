const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const product = new Schema(
    {
        title: { type: String, minlength: 10, required: true },
        description: { type: String, maxlength: 255 },
        price: { type: Number, default: 0, required: true },
        slug: { type: String, maxlength: 100, unique: true, required: true },
        img: { type: String, maxlength: 500 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Product', product, 'products');
