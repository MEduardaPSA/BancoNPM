const express = require('express');
const router = express.Router();

const toEnterController = require('../controllers/toEnterController');

router.post('/entrar', toEnterController.toEnterView);

module.exports = router;