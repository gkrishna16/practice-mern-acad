const MongoClient = require('mongodb').MongoClient;

const url = `mongodb+srv://gopal1234:gopal1234@mern-acad.clehp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const createProduct = async (req, res, next) => {
	const { name, price } = req.body;
	const newProduct = {
		name,
		price,
	};
	const client = new MongoClient(url);

	try {
		await client.connect();
		const db = client.db();
		const result = db.collection('products').insertOne(newProduct);
	} catch (error) {
		return res.json({ message: 'Could not store data.' });
	}
	client.close();

	res.json(newProduct);
};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
