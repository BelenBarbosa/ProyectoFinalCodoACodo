const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController')

router.get('/servicios', adminController.all);

router.get('/servicios/:id', adminController.one);






module.exports = router;