const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
    category_name: {
        type: String,
        required: true
    },
    side_effect: {
        type: String,
        required: false
    },
    active_ingredient: {
        type: String,
        required: false
    },
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: String,
        required: true
    },
    product_newprice: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: true
    },
    latestOffer: {
        type: String,
        required: false
    },
    inStock:{
        type: String,
        required: true
    },
    bestSeller:{
        type: String,
        required: false
    }

});

const productcollection = new mongoose.model("product", productSchema);
module.exports = productcollection;
