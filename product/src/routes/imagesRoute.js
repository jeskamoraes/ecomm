const { Router } = require('express');
const ImageController = require('../controllers/ImageController')

const router = Router()

router.post('/images', ImageController.registerImage);
router.get('/images', ImageController.listAllImages);

module.exports = router