import { Products } from '../models/products.js'
import { Features } from '../models/features.js';
import { Images } from '../models/images.js';

export async function saveProduct(produto) {
    const createdProduct = await Products.create(produto, {
        include: [
            { association: Products.Features, as: 'features',},
            { association: Products.Images, as: 'images'}
        ]
    });
    await createdProduct.save();
    return createdProduct;
}

export async function findProducts() {
    const allProducts = await Products.findAll({ include : [
        {
            model: Features,
            as: 'features'
        }, {
            model: Images,
            as: 'images'
        }]
    });
    return allProducts;
}
