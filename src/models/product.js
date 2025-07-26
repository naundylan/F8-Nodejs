const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: { type: String, minlength: 5, required: true },
    description: { type: String, maxlength: 255 },
    price: { type: Number, default: 0, required: true },
    slug: { type: String, maxlength: 100, unique: true, required: true },
    img: { type: String, maxlength: 500 },
}, {
    timestamps: true,
});

ProductSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
    indexFields: ['deleted', 'deletedAt'] // Đảm bảo các trường này được lập chỉ mục
});

module.exports = mongoose.model('Product', ProductSchema, 'products');