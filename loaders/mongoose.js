const mongoose = require('mongoose');

async function startDB(){
    mongoose.set('strictQuery', true)
    try {
    await mongoose.connect('mongodb+srv://lucasads4:604n6xdNwePzK1Rt@cluster0.qchtace.mongodb.net/test');
        console.log("Banco de dados conectado!")
    } catch (error) {
        console.log("Banco de dados deu problema!" + error)
    }
}

module.exports = startDB;