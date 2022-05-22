//Import Librarie mongoose
const mongodb = require("mongoose");

mongodb.connect('mongodb://localhost/products')
.then(()=>console.log("Connected Successfuly"))
.catch(()=>console.log("Not Connect"));

module.exports = mongodb;