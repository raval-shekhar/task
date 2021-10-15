const express = require('express');

const app = express.Router();

app.use('/products', require('./product/route'));

module.exports = app;
