const express = require("express");
const server = express();
const product_controller = require("../controller/Product");
router = express.Router()


router.post("/products", product_controller.createProduct)
.get("/products", product_controller.GetAllProducts)
.get("/products/:id", product_controller.Getproduct)
.put("/products/:id", product_controller.Replaceproduct)
.patch("/products/:id", product_controller.Updateproduct)
.delete("/products/:id", product_controller.Deleteproduct)

exports.router=router