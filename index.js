const express = require('express');
require("dotenv").config()
const {connection}=require("./configs/db");
const { cartRoute } = require('./Routes/cart.route');
const cors = require('cors');


const app=express()
app.use(cors())
app.use(express.json())
app.use("/cart",cartRoute)

app.listen(process.env.PORT,async ()=>{
    try {
        await connection
        console.log("connected to database")
    } catch (error) {
        console.log(error.message)
    }
    console.log("server at 8080")
})