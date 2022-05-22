//Import Librarie mongoose
const mongodb = require("mongoose");

mongodb.connect('mongodb+srv://dev:6HIhC0jwAlraiLuG@cluster0.lljoq.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("Connected Successfuly"))
.catch(()=>console.log("Not Connect"));

module.exports = mongodb;