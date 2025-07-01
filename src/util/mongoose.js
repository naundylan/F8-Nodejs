module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map((item) => item.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
