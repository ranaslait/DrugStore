const mongoose = require('mongoose');

// Define the cart schema
const cartSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'user', // Reference to the User model
//     required: true
//   },
//   cartItems: [
    // {
    //     user_id:{
    //         type:String,
    //         ref: 'user',
    //         required: true
    //     },    
    // user_name:{
    //     type:String,
    //     required: true
    // },
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
//   ],
//  , createdAt: {
//     type: Date,
//     default: Date.now
//   }
);

// Create the Cart model
const cart = mongoose.model('Cart', cartSchema);

module.exports = cart;