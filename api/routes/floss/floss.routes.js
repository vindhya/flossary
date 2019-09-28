const express = require('express');

const router = express.Router();

router.route('/:flossId').get(async (req, res) => {
	const floss = await flossService.getFloss(req.params.id);
	res.status(200).json({ data: floss });
})