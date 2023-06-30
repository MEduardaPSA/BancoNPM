const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController');

router.post('/registrar', registerController.registerView);

module.exports = router;