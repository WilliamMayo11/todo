'use strict';

require('dotenv').config({ silent: true });

const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const dbRouter = require('./routes/db.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/db', dbRouter);

module.exports = app;
