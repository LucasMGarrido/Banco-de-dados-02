const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://sammiGabi:d3d3d3@cluster0.qchtace.mongodb.net/test');
}

module.exports = startDB;