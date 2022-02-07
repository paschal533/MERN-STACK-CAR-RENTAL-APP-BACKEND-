const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://paschal:84316860p@cluster0.t5pyu.mongodb.net/car-rental-app' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
