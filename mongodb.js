const { string } = require("i/lib/util");
const mongoose = require('mongoose');


const userschema= new mongoose.Schema({
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
    
})

const usercollection=new mongoose.model("usercollection",userschema)

module.exports=usercollection