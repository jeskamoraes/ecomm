const database = require('../models');

class ProductController {

    static async createImage(req, res) {
        const { productId } = req.params;
        const newImage = { ...req.body, product_id: Number(productId) }
        try {
            const newImageCreated = await database.Images.create(newImage);
            return res.status(200).json(newImageCreated);
        }catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listAllImages(req, res) {
        try {
            const allImages = await database.Images.findAll();
            return res.status(200).json(allImages) 
        }catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createProduct(req, res) {
        const newProduct = req.body;
        try {
            const newProductCreated = await database.Products.create(newProduct);
            return res.status(200).json(newProductCreated);
        }catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listAllProducts(req, res) {
        try {
            const allProducts = await database.Products.findAll();
            return res.status(200).json(allProducts) 
        }catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ProductController