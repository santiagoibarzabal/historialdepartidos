const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');

const app = express();
app.use(express.static(path.join(__dirname, './public'))); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(3000);

const matchesRouter = require('./routes/matches');
const playersRouter = require('./routes/players');
const homeRouter = require('./routes/home');

app.get('/', homeRouter);
app.use('/matches', matchesRouter);
app.use('/players', playersRouter);

module.exports = app;
