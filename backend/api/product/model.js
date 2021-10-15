const { Schema, model } = require('mongoose');

/**
 * Products Schema
 * @private
 */
const ProductShema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	expires: {
		type: Date,
	},
});

const ProductsModel = model('products', ProductShema);

module.exports = ProductsModel;
