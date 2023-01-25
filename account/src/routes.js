import { Router } from 'express';
import { createAccountUseCase } from "./use-case/createAccountUseCase.js";

const router = Router();

router.post('/accounts', function (req, res) {

    const { name, email, password } = req.body
  
    createAccountUseCase(name, email, password)
        .then((data) => {

            let user = {
                id: data.id,
                name: data.name,
                email: data.email,
                password: data.encodedPassword,
                date: data.createdDate
            }

            res.status(201).json(user);

        })
        .catch((error) => {

            res.status(400)
                .json({
                    status: 'Error creating user!',
                    message: error.message
                });
        })
});
export default router;
