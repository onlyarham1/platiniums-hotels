const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://onlyarham1:Arham444@cluster0.iyt1wnw.mongodb.net/mern-rooms'

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser:true})

var connection = mongoose.connection;

connection.on(`error` , ()=>{
    console.log('MongoDB Connection Failed')
})

connection.on('connected ', ()=>{
    console.log('MongoDB is connected successfully')
})

module.exports = mongoose