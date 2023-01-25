import { Router } from 'express';
import { createProduct } from '../usecase/createProductUseCase.js';
import { listProducts } from'../usecase/listProductsUseCase.js';
import jwt from 'jsonwebtoken';
import { createUser } from '../usecase/createUserUseCase.js';
import { Users } from '../models/users.js';
import validationToken from '../middlewares/auth.js';
import bcrypt from 'bcryptjs';


export class ProductController {
    // router.use(validationToken);
    async listAllProducts(req, res)  {
        listProducts()
            .then(products => {
                res.status(200).json(products)
            })
            .catch(error => {
                res.status(500).json({ status: 'error', message: error.message });
            });
    };
    
    async registerProduct(req, res) {
        const product = req.body;
        
        createProduct(product)
            .then((data) => {
                res.status(201).json(data);
            })
            .catch((error) => {
                res.status(400).json({ message: error.message });
            })
    };
    
}


