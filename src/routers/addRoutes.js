const express = require('express');
const router = express.Router();

const addController = require('../controllers/addController');

router.post('/adicionar-saldo', addController.addAmount);

module.exports = router;