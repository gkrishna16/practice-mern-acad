const mongoose = require('mongoose');

const Product = require('../models/product');

const createProduct = async (req, res, next) => {
	const { name, price } = req.body;
	const createdProduct = new Product({
		name,
		price,
	});

	try {
		// const result = await Product.create(req.body);
		console.log(createdProduct);
		const result = await createdProduct.save();
		// console.log(typeof createdProduct.id);
		res.json({ products: result });
	} catch (error) {
		res.json({ message: `Product could not be created because of ${error}` });
	}
};

const getProducts = async (req, res, next) => {
	const products = await Product.find({}).exec();

	res.json({ products });
};

const deleteAll = async (req, res, next) => {
	try {
		const result = await Product.deleteMany({});
		res.json({ message: `deleted all ${result}` });
	} catch (error) {
		res.json({ message: `This is the error ${error}` });
	}
};

module.exports = { createProduct, deleteAll, getProducts };
