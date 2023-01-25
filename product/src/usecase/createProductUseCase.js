import { saveProduct } from"../repositories/productRepository.js";
import { randomUUID } from 'crypto';

export const createProduct = async product => {
    const savedProduct = await saveProduct(product);
    return savedProduct;   
}

