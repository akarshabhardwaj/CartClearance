const mongoose = require('mongoose');


const cartSchema=mongoose.Schema({
id:Number,
image:String,
frameshape:String,
compatible:String,
price:Number,
desc:String,
rating:Number
})

const CartModel=mongoose.model("cart",cartSchema)


module.exports={CartModel}


/*
{
    "id": 1,
    "image": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/amber-full-rim-hustlr-eyeglasses_csvfile-1672134704325-g_7896_23_12_2022.jpg",
    "frameshape": "Round",
    "compatible": "Man",
    "price": 2500,
    "desc": "Medium Shark Tank",
    "rating": 4
  }
*/