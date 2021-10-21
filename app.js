const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./db/connect');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.use('/api/products', productRoutes);

const start = async () => {
	try {
		await connectDB(process.env.URI);
		app.listen(port, () => {
			console.log(`server started on ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();

// commit
