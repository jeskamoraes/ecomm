import { saveProduct } from"../repositories/productRepository.js";

export const createProduct = async product => {
    const savedProduct = await saveProduct(product);
    return savedProduct;   
}

