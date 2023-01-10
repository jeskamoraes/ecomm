const database = require('../models')

class ImageController {

    static async listAllImages(req, res) {
        try{
            const allImages = await database.Images.findAll();
            return res.status(200).json(allImages);
        }catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async registerImage(req, res) {
        const newImage = req.body;
        try{
            const newImageCreated = await database.Images.create(newImage);
            return res.status(200).json(newImageCreated);
        }catch(error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ImageController