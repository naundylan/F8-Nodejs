const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, maxlength: 255 },
    price: { type: Number, default: 0, required: true },
    slug: { type: String, maxlength: 100, unique: true, required: true },
    img: { type: String, maxlength: 500 },
}, {
    timestamps: true,
});

// Custom query helpers
ProductSchema.query.sortable = function (req) {
    if( '_sort' in req.query ) {
        const sortObject = {};
        const sortColumn = req.query.column;
        const sortType = req.query.type === 'desc' ? -1 : 1;
        sortObject[sortColumn] = sortType;
        return this.sort(sortObject);
    }
    else return this;
}

ProductSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
    indexFields: ['deleted', 'deletedAt'] // Đảm bảo các trường này được lập chỉ mục
});

module.exports = mongoose.model('Product', ProductSchema, 'products');