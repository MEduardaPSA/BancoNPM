const express = require('express');
const router = express.Router();

const logoffController = require('../controllers/logoffController');

router.post('/sair', logoffController.logoffView);

module.exports = router;