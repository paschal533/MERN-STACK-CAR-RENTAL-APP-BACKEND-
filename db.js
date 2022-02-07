const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://paschal:84316860p@cluster0.fe45a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true})

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
