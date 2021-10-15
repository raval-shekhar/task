const app = require('express').Router();
const productController = require('./controller');

app.route('/').get(productController.fetchProducts);

module.exports = app;
