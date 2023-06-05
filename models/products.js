// const { string } = require("i/lib/util");
const mongoose = require('mongoose');
// const bcrypt = require("bcrypt");
// const crypto = require("crypto");
// const { Buffer } = require("i/lib/util");
const { Schema } = mongoose;
const productSchema= new Schema({
    category_name:{
        type:String,
        required:true
    },
    side_effect:{
        type:String,
        required:true
    },
    active_ingredient:{
        type:String,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:String,
        required:true
    },
    product_newprice:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    
});

const productcollection=new mongoose.model("product",productSchema);
module.exports=productcollection;
