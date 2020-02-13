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

// GET
router.get('/get', async (req, res) => {
	res.json({
		query: req.query,
		...helper(req)
	});
});

// REST-style URL
router.get('/user/:user', async (req, res) => {
	res.json({
		params: req.params,
		...helper(req)
	});
});

// POST [application/x-www-form-urlencoded, application/json]
router.post('/post', async (req, res) => {
	res.json({
		body: req.body,
		...helper(req)
	});
});

router.get('/cookies', async (req, res) => {
	res.json({
		cookies: req.cookies,
		...helper(req)
	});
});

router.get('/500', async (req, res) => {
	res.sendFile('/nepostojeci-fajl'); // Trigger error intentionally
});

export default router;
