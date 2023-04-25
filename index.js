const express = require("express");
require("dotenv").config()
const server = express();
const path = require('path')
const mongoose = require("mongoose")
const cors = require('cors')
//db connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
server.use(cors())
server.use(express.json());
productRouter = require("./routes/product")
//Mvc == model view controler
 server.use(express.static( path.resolve(__dirname,process.env.PUBLIC_DIR)))
const product_controller = require("./controller/Product");
server.use("/",productRouter.router)
server.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})
server.listen(8080, () => {
  console.log("server started");
});
