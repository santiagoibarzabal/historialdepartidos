const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const playersController = require('../controllers/playerController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
});

const upload = multer({storage});

router.get('/', playersController.index); 
router.get('/:id/edit', playersController.edit); 
router.get('/:id', playersController.show); 
router.put('/:id', upload.single('avatar') ,playersController.update); 
router.delete('/:id', playersController.delete); 

module.exports = router;