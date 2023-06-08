const mongoose = require('mongoose');

// Define the cart schema
const cartSchema = new mongoose.Schema({
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        // required: true
      },
      quantity: {
        type: Number,
        default: 1
      },
      price: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    }

);

const cart = mongoose.model('Cart', cartSchema);

module.exports = cart;