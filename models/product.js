//import librarie mongodb
const mongoose = require("mongoose");

//create Model Product
const Product = new mongoose.model('Product',new mongoose.Schema({
    name:{type:String,trim:true,required:true},
    price:{type:Number,required:true},
    date:{type: Date, default: Date.now}
},{ versionKey: false }) );

//export Model
module.exports = Product;
 