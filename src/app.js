const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(require('../src/routes/index'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;