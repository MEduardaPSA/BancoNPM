const express = require('express');
const router = express.Router();

const loginCorrentAccountController = require('../controllers/loginCorrentAccountController');

router.post('/login-conta-corrente', loginCorrentAccountController.showInformationsAboutCorrentAccount);


module.exports = router;