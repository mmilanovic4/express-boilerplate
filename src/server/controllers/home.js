import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', async (req, res) => {
	res.sendFile(path.resolve('html', 'hello.html'));
});

export default router;
