const { Router } = require('express');
const FeatureController = require('../controllers/FeatureController')

const router = Router()

router.post('/features', FeatureController.registerFeature);
router.get('/features', FeatureController.listAllFeatures);

module.exports = router