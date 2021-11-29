const express = require('express');
const router = express.Router();

const playersController = require('../controllers/playerController');

router.get('/', playersController.index); 
router.get('/:id/edit', playersController.edit); 
router.put('/:id', playersController.update); 
router.delete('/:id', playersController.delete); 

module.exports = router;