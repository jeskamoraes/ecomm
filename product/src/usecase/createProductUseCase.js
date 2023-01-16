import { saveProduct } from"../repositories/productRepository.js";
import { randomUUID } from 'crypto';

export const createProduct = async product => {
    const id = randomUUID();
    const createdDate = new Date().toISOString().substring(0, 10);
    //const createProduct = { id, createdDate, ...product }

    const createProduct = {
        createdDate,
        ...product
    }

    await saveProduct(createProduct);
    return createProduct; 
    
}

