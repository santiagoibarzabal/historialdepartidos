const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerMiddleware.js');


const playersController = require('../controllers/playerController');

router.get('/', playersController.index); 
router.get('/:id', playersController.show); 
router.get('/:id/edit', playersController.edit); 
router.put('/:id', upload.single('avatar'), playersController.update); 
router.delete('/:id', playersController.delete); 

module.exports = router;