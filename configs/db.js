const mongoose = require('mongoose');

const connection=mongoose.connect(process.env.mongourl)


module.exports={connection}