const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    price: {
        type: mongoose.Schema.Types.Number,
        require: true 
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;