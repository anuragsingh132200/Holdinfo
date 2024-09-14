const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('yourdburl');


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting to db'));

db.once('open', ()=>{
    console.log('Successfully connected to database')
});

module.exports = db;