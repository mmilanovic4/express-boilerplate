import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', async (req, res) => {
	res.render('index', { title: 'Hello' });
});

export default router;
