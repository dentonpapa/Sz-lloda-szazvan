const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()  =>{
    console.log("szalloda is listening")
});

app.use('/', express.static('landing'));
app.use('/about', express.static('about'));
app.use('/info', express.static('info'));