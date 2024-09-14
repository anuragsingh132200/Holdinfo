const mongoose = require('mongoose');

const apiDataSchema = new mongoose.Schema({
    name: 'String',
    last: 'String',
    buy: 'String', 
    sell: 'String', 
    volume: 'String', 
    base_unit: 'String'
})

let Data = mongoose.model('data', apiDataSchema);
module.exports = Data;