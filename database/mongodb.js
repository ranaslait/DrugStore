const { string } = require("i/lib/util");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const { Schema } = mongoose;
//users schema
const userSchema= new Schema({
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
    },
    type: {
        type: String,
        required: true
      },
    
});

const usercollection=new mongoose.model("user",userSchema);
module.exports=usercollection;
