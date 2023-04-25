const fs = require("fs");
const path = require('path')
// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../data.json"), "utf-8"));
const model = require("../model/product");
const Product=model.Product;

exports.createProduct = (req, res) => {
   const product = new Product(req.body);
  //  product.title="phoneX"
  //  product.price=999
  //  product.rating=5
   product.save() // save the document and return a promise
   .then(savedDocument => {
     // handle the response for successful save
     res.status(200).json({ message: "Document saved successfully" });
   })
   .catch(error => {
     // handle the error and return an error response
     res.status(500).json({ error: "Failed to save document", details: error });
   })
    
  };
  exports.GetAllProducts = async (req, res) => {
    // const products = await Product.find({price:{$gt:500}})
    const products = await Product.find()
    res.json(products);
  };
  exports.Getproduct = async (req, res) => {

     const id = req.params.id;
     const products = await Product.findById(id)

    // const product = products.find((p) => p.id === id);
    res.json(products);
  };
  exports.Replaceproduct = async (req, res) => {
    const id = req.params.id;
   const products = await Product.findOneAndReplace({ _id:id},req.body,{new:true})
    // const productindex = products.findIndex((p) => p.id === id);
    // products.splice(productindex, 1, { ...req.body, id: id });
  
    res.status(201).json(products);
  };
  exports.Updateproduct = async(req, res) => {
    const id = req.params.id;
    const products = await Product.findOneAndUpdate({ _id:id},req.body,{new:true})

    // const productindex = products.findIndex((p) => p.id === id);
    // const product = products[productindex];
    // products.splice(productindex, 1, { ...product, ...req.body });
    res.status(201).json(products);
  };
  exports.Deleteproduct = async (req, res) => {
    const id = req.params.id;
    // const productindex = products.findIndex((p) => p.id === id);
    // const product = products[productindex];
    // products.splice(productindex, 1);
    const products = await Product.findOneAndDelete({ _id:id},{new:true})

    res.status(201).json(products);
  };