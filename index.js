const express = require('express');
const app = express();
const PORT = 8000;

const mongoose = require('./config/mongoose')

app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(express.static('assets'))

app.use('/', require('./routes'))


app.listen(PORT, (err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server is up at port: ${PORT}`)
})