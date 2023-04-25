const mongoose = require("mongoose")
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type:String, required:true},
    description: String,
    price: {type:Number, min:[0, 'wrong min price'],required:true},
    discountPercentage:{type:Number, min:[0, 'wrong min discount'], max:[50,'wrong max discount']},
    rating:{type:Number, min:[0, 'wrong rating'], max:[5,'wrong max rating'],default:0},
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [ String ],
  });
  exports.Product = mongoose.model('products', productSchema);