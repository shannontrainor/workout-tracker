const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//listening port
const PORT = 3000;

//connect to express
const app = express();

//morgan
app.use(logger('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

//app.use(require('./routes/api.js'));
app.use(require('./routes/htmlRoutes.js'));

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
});
