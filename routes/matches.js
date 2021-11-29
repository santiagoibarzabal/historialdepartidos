const express = require('express');
const router = express.Router();

const matchController = require('../controllers/matchController');

router.get('/create', matchController.create); 
router.post('/', matchController.store); 



module.exports = router;
