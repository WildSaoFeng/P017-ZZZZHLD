const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const PORT = process.env.port || 8000;

// Begin App

const app = express();
app.use(express.static(path.join(__dirname, "./build")));

app.use(cors());

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

app.use(session({
    secret: 'saofeng',
    saveUninitialized: true,
    resave: true
}));

const Data = require('./routers/data');

const config = {
    database: 'mongodb://localhost:27017/zzzzhld'
}

function setupDB() {
    // mongoose.connect(config.database);
    mongoose.connect(config.database,{useNewUrlParser: true });


    mongoose.connection.on('connected', () => {
        console.log('Trader Connected to MongoDB successfully');
    });

    mongoose.connection.on('error', (err) => {
        console.log('Database error' + err);
    });
}

function startWebServer() {

    app.use('/data', Data);

    // Start Web Server Listening
    app.listen(PORT, () => {
        console.log('Server Started on Port ' + PORT);
    });
}

(function main() {
    setupDB();
    startWebServer();
})();

module.exports = app;