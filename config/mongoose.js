const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://e-learning-platform:6TDygw7JiV6X9_A@cluster0.oizobcd.mongodb.net/newdb?retryWrites=true&w=majority&appName=Cluster0');


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting to db'));

db.once('open', ()=>{
    console.log('Successfully connected to database')
});

module.exports = db;
