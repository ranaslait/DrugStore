const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/LoginSignupDOSE")
.then(()=>{
    console.log("mongodb connected");
})
.catch((e)=>{
    console.log("fail to connect")
})


const loginschema= new mongoose.Schema({
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
})

const logincollection=new mongoose.model("logincollection",loginschema)

module.exports=logincollection