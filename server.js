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

app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/views.js'));

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
