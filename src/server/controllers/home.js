import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Greeting from 'Client/components/Greeting';

const router = express.Router();

router.get('/', async (req, res) => {
	res.render('index', { title: 'Hello' });
});

router.get('/react', async (req, res) => {
	const el = React.createElement(Greeting, {
		firstName: 'John',
		lastName: 'Doe'
	});
	const dom = ReactDOMServer.renderToStaticMarkup(el);

	res.render('react', {
		title: 'React Hello',
		dom
	});
});

export default router;
