import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        userId: { type: String },
        productId: { type: String },
        name: { type: String, required: true },
        value: { type: Number, required: true },
        quantity: { type: Number, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        features: [
            {
                name: { type: String, required: false },
                description: { type: String, required: false },
            }
        ],
        images: [
            {
                url: { type: String, required: false },
                description: { type: String, required: false },
            }
        ]
    }
);

const products = mongoose.model('products', productSchema);

export default products;

