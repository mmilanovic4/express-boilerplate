import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from 'Client/App';

const router = express.Router();

router.get('/', async (req, res) => {
	res.render('index', { title: 'Hello' });
});

router.get('/react-hello', async (req, res) => {
	const el = React.createElement(App);
	const dom = ReactDOMServer.renderToString(el);

	res.render('react', {
		title: 'React Hello',
		dom
	});
});

export default router;
