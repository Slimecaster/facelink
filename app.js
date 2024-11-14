const express = require ('express')
const mongoose = require('mongoose')
const routes = require('./routes/userRoutes');
const bodyParser =require('body-parser')
const path = require('path');
const port = 3000
const app = express()

mongoose.connect('mongodb://localhost:27017/facelink', {connectTimeoutMS: 10000})
    .then(() => console.log('MongoDB Connected Successfully'))
    .catch(err => console.error('MongoDB connection error:',err));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true }));

app.use('/',routes)

app.use(express.static(path.join(__dirname, 'public')));



app.listen(port, () => console.log(`http://localhost:${port}`))