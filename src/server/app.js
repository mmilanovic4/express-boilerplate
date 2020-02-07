import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import https from 'https';
import path from 'path';

import homeController from 'Server/controllers/home';
import testController from 'Server/controllers/test';

dotenv.config();

const app = express();
const port = process.env.PORT;

// App settings
app.disable('x-powered-by');
app.set('view engine', 'pug');
app.set('views', path.resolve('views'));

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
	res.status(404).render('404', { title: '404' });
});

// HTTP 500
app.use(async (err, req, res, next) => {
	console.error(err.stack);
	res.status(500).render('500', { title: '500' });
});

// Start the server
const server =
	process.env.SSL_KEY &&
	process.env.SSL_CERT &&
	fs.existsSync(process.env.SSL_KEY) &&
	fs.existsSync(process.env.SSL_CERT)
		? https.createServer(
				{
					key: fs.readFileSync(process.env.SSL_KEY),
					cert: fs.readFileSync(process.env.SSL_CERT)
				},
				app
		  )
		: app;

server.listen(port, () => console.log(`App listening on port ${port}...`));
