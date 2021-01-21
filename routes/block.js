const express = require('express');
const router = express.Router();

const blockController = require('../controllers/block');

router.get('/', blockController.get);

router.get('/:date', blockController.getByDate);

router.post('/', blockController.post);

module.exports = router;