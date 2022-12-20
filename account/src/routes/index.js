import express from "express";
import products from "./productsRoutes.js";
import accounts from './accountsRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "ecomm"})
    })

    app.use(
        express.json(),
        accounts,
        products
    );
};

export default routes;