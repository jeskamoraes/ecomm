import express from "express";
import ProductController from '../controllers/productsController.js';

const router = express.Router();

router
    .post("/products", ProductController.registerProduct)
    .get("/products", ProductController.listAllProducts)
    .get("/products/:id", ProductController.listProductById)
    .put("/products/:id", ProductController.updateProduct)
    .delete("/products/:id", ProductController.deleteProduct)

export default router;