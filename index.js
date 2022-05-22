//Imports Libraries & Models
const product_router = require("./routes/product_router");
const express = require("express");
const helmet = require("helmet");
const mongodb = require("mongoose");
var app = express();



//Connect With Database
mongodb.connect('mongodb+srv://dev:6HIhC0jwAlraiLuG@cluster0.lljoq.mongodb.net/?retryWrites=true&w=majority'

)
.then(()=>console.log("Connected Successfuly") , )
.catch(err => {
    console.log(Error, err.message);
  })



// Use Json
app.use(express.json());
//Use Helemt For Express HTTP
app.use(helmet());

//Use Products Router To Fetch & Add Products
app.use("/products" , product_router);

//Run & Check Port 3000 
var port = process.env.PORT || 3000;
app.listen(port , ()=>{
    console.log("Run in port "+port+" ..")
});
