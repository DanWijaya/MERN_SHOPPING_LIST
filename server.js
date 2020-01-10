const express = require('express'); // handle the backend tasks
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); //allow to take request and get the data from the body. 

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Db Config 
const db = require('./config/keys.js').mongoURI;

// Connect to MongoDB

mongoose.connect(db,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port' + port));


