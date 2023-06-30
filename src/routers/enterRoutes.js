const express = require('express');
const router = express.Router();

const entercontroller = require('../controllers/enterController');

router.post('/abrir-conta-corrente', entercontroller.createcheckingAccount);

module.exports = router;
