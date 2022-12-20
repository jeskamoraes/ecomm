import express from "express";
import AccountController from '../controllers/accountsController.js';

const router = express.Router();

router
    .post("/accounts", AccountController.registerAccount)
    .get("/accounts", AccountController.listAllAccounts)
    .get("/accounts/:id", AccountController.listAccountById)
    .put("/accounts/:id", AccountController.updateAccount)
    .delete("/accounts/:id", AccountController.deleteAccount)


export default router;