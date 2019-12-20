import express from 'express';

const router = express.Router();

const helper = req => {
	return {
		headers: req.headers,
		method: req.method,
		ip: req.ip,
		hostname: req.hostname,
		protocol: req.protocol,
		secure: req.secure
	};
};

router.get('/get', async (req, res) => {
	const response = {
		query: req.query,
		...helper(req)
	};
	res.json(response);
});

router.post('/post', async (req, res) => {
	const response = {
		body: req.body,
		...helper(req)
	};
	res.json(response);
});

router.post('/post/json', async (req, res) => {
	const response = {
		body: req.body,
		...helper(req)
	};
	res.json(response);
});

router.get('/params/user/:user', async (req, res) => {
	const response = {
		params: req.params,
		...helper(req)
	};
	res.json(response);
});

router.get('/cookies', async (req, res) => {
	const response = {
		cookies: req.cookies,
		...helper(req)
	};
	res.json(response);
});

router.get('/500', async (req, res) => {
	res.sendFile('/nepostojeci-fajl'); // Trigger error intentionally
});

export default router;
