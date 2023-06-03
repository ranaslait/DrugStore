const mongoose=require('mongoose');
const { Schema } = mongoose;

const fruitSchemea=new Schema({
    namFr:{
        type: String,
        require: true
    }
});

const fruitcollection=new mongoose.model("fruit",fruitSchemea);
module.exports=fruitcollection;
