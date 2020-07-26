const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//listening port
const PORT = process.env.PORT || 3000;

//connect to express
const app = express();

//morgan
app.use(logger('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

let MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/workout";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(require('./routes/api.js'));
app.use(require('./routes/views.js'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
