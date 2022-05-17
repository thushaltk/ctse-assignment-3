const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://thushaltk:thushal1234@cluster0.tivsh.mongodb.net/ctse-ass3?retryWrites=true&w=majority').then(() => {
    console.log("Connected to Database :)....");
}).catch((error) => {
    console.log(error)
})

const db = mongoose.connection

module.exports = db