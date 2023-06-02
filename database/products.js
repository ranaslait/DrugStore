const { string } = require("i/lib/util");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { Buffer } = require("i/lib/util");
const { Schema } = mongoose;
//users schema
const productSchema= new Schema({
    category_name:{
        type:string,
        required:true
    },
    side_effect:{
        type:string,
        required:true
    },
    product_name:{
        type:string,
        required:true
    },
    product_price:{
        type:string,
        required:true
    },
    product_newprice:{
        type:string,
        required:true
    },
    
});

const productcollection=new mongoose.model("product",productSchema);
module.exports=productcollection;
