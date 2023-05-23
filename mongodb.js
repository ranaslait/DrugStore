const { string } = require("i/lib/util");
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://ranaslait:4setDtjtBFb549Nx@cluster0.a3ua0nj.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch((e)=>{
    console.log("fail to connect")
})


const loginschema= new mongoose.Schema({
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

const logincollection=new mongoose.model("logincollection",loginschema)

module.exports=logincollection