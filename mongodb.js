const { string } = require("i/lib/util");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const Schema = mongoose.Schema;
//users schema
const userschema= new Schema({
   name:{
    type:String,
    required:true
   },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
      type:String,
      required:false
    }
    
});

const usercollection=new mongoose.model("user",userschema);
module.exports=usercollection
//product schema
// const productschema= new Schema({
//     category_name:{
//         type:string,
//         required:true
//     },
//     side_effect:{
//         type:string,
//         required:true
//     },
//     product_name:{
//         type:string,
//         required:true
//     },
//     product_price:{
//         type:string,
//         required:true
//     },
//     product_newprice:{
//         type:string,
//         required:true
//     },
//     IMAGE: {
//         type: String,
//         required: true
//       }
    

     
//  });

//  const productcollection=new mongoose.model("product",productschema);
// module.exports=productcollection