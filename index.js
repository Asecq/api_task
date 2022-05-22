//Imports Libraries & Models
const connect = require("./api/connect")
const product_router = require("./routes/product_router");
const express = require("express");
const helmet = require("helmet");
var app = express();



//Connect With Database
connect;


// Use Json
app.use(express.json());
//Use Helemt For Express HTTP
app.use(helmet());

//Use Products Router To Fetch & Add Products
app.use("/products" , product_router);

//Run & Check Port 3000 
var PORT = process.env.port || 3000;
app.listen(PORT , ()=>{
    console.log("Run in port "+PORT+" ..")
});
