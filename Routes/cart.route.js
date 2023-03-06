const express = require('express');
const { CartModel } = require('../models/cart.model');


const cartRoute=express.Router()

cartRoute.get("/",async(req,res)=>{
const items=await CartModel.find()
res.send({"data":items})
})


cartRoute.post("/add",async(req,res)=>{
    // console.log(req.body)
    try {
        const item=new CartModel(req.body)
        item.save()
        res.send({"msg":"Sucessfully added to cart"})
    } catch (error) {
        res.send({"msg":error.message})
    }
})


cartRoute.delete("/delete/:id",async (req,res)=>{
    const Id=req.params.id;
    try {
        await CartModel.findByIdAndDelete({_id:Id})
        res.send({"msg":"Sucessfully deleted to cart"})
    } catch (error) {
        res.send({"msg":error.message})
    }
})


cartRoute.delete("/checkout",async (req,res)=>{
    try {
        await CartModel.deleteMany({})
        res.send({"msg":"Sucessfully ordered"})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports={cartRoute}