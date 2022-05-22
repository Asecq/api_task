//Imports Libraries & Models
const express = require("express");
const router = express.Router();
const Product = require("../models/product");

//Fetch All Products ~ Method GET
    router.get("/", async(req,res)=>{
    const products = await Product.find();
    res.send(products);
    });

// Add New Product ~ Method POST 
// Parameters is rows Json {name,price}   
// id(dynamic) & date(dynamic)
    router.post("/add" ,async(req,res)=>{
    const product = new Product({
            name:req.body.name,
            price:req.body.price
    });
    if(!product){
        return res.send("Error Unknow");
    }
     await product.save();
     res.send('Product Added Successfully');
    });

// Filter Product By Id ~ Method GET
// Parameter id
    router.get("/:id" , async (req,res)=>{
    const finditem = await Product.findById(req.params.id);
    if(!finditem){
        return  res.send("Can Not Found Product !");
      }
    res.send(finditem);
    });

// Export Router For Another Pages
module.exports = router;