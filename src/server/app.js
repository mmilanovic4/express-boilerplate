import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

import homeController from './controllers/home';
import testController from './controllers/test';

dotenv.config();

const app = express();
const port = process.env.PORT;

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

// Third-party middleware
app.use(cookieParser());
app.use(cors());

// Controllers
app.use('/', homeController);
app.use('/test', testController);

// HTTP 404
app.use(async (req, res, next) => {
	res.status(404).sendFile(path.resolve('html', '404.html'));
});

// HTTP 500
app.use(async (err, req, res, next) => {
	console.error(err.stack);
	res.status(500).sendFile(path.resolve('html', '500.html'));
});

// Start the server
app.listen(port, () => {
	console.log(`App listening on port ${port}...`);
});
