import { findProducts } from "../repositories/productRepository.js";

// Utilizando a findProducts para retornar uma lista com todos os produtos salvos
export const listProducts = async () => {
    const products = await findProducts();
    return products;
}
