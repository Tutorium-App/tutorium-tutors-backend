const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://eyarko:%40Kwesi500@lawsonscluster.l1vqepq.mongodb.net/Tutorium-Tutor').on('open', ()=>{
    console.log("Database connected successfully");
}).on('error', ()=>{
    console.log("Error connecting to database");
});

module.exports = connection;
