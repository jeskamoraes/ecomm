import { findProducts } from "../repositories/productRepository.js";

export const listProducts = async () => {
    const products = await findProducts();
    return products;
}
