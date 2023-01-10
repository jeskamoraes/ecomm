const database = require('../models')

class FeatureController {

    static async listAllFeatures(req, res) {
        try{
            const allFeatures = await database.Features.findAll();
            return res.status(200).json(allFeatures);
        }catch(error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async registerFeature(req, res) {
        const newFeature = req.body;
        try{
            const newFeatureCreated = await database.Features.create(newFeature);
            return res.status(200).json(newFeatureCreated);
        }catch (error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = FeatureController