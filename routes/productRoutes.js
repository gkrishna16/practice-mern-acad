const express = require('express');
const router = express.Router();
const {
	createProduct,
	deleteAll,
	getProducts,
} = require('../controllers/products-controller');

router.route('/');
router.route('/').post(createProduct).delete(deleteAll).get(getProducts);

module.exports = router;
