const { string } = require("i/lib/util");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const bcryptSalt=10;
const Schema = mongoose.Schema;

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
// userschema.methods.generatePasswordResetHash = function(){
//     const resetHash = crypto.createHash('sha512').update(this.password).digest('hex')
//     return resetHash;
// }

// //verify password reset hash
// userschema.methods.verifyPasswordResetHash = function(resetHash = undefined){
//     //regenerate hash and check if they are equal
//     return this.passwordResetHash() === resetHash;
// }
const usercollection=new mongoose.model("user",userschema);
module.exports=usercollection