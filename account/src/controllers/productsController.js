import products from "../models/Products.js";

class ProductController {

    static registerProduct = (req, res) => {
        let product = new products(req.body);

        product.save((err) => {

            if (err) {
                res.status(500).send({ message: `${err.message} - Failed to register product.` });
            } else {
                res.status(201).send(product.toJSON());
            };
        });
    };

    static listAllProducts = (req, res) => {
        products.find((err, products) => {
            res.status(200).json(products);
        });
    };

    static listProductById = (req, res) => {
        const id = req.params.id;

        products.findById(id, (err, products) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Product id not found.`});
            }else {
                res.status(200).send(products);
            };
        });
    };

    static updateProduct = (req, res) => {
        const id = req.params.id;

        products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Product updated successfully.' });
            }else {
                res.status(500).send({ message: err.message });
            };
        });
    };

    static deleteProduct = (req, res) => {
        const id = req.params.id;
        products.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Product removed successfully.'});
            }else {
                res.status(500).send({message: err.message});
            };
        });
    };

};

export default ProductController;