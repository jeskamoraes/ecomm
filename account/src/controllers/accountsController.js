import accounts from "../models/Account.js";

class AccountController {

    static listAllAccounts = (req, res) => {
        accounts.find((err, accounts) => {
            res.status(200).json(accounts);
        });
    };

    static listAccountById = (req, res) => {
        const id = req.params.id;

        accounts.findById(id, (err, accounts) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Account id not found..`});
            }else {
                res.status(200).send(accounts);
            };
        });
    };

     static registerAccount = async (req, res) => {
        let account = new accounts(req.body);

        account.save((err) => {

            if (err) {
                res.status(500).send({ message: `${err.message} - Failed to register product.` });
            } else {
                res.status(201).send(account.toJSON())
            };
        });
    };

    static updateAccount = (req, res) => {
        const id = req.params.id;

        accounts.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Account updated successfully.' });
            } else {
                res.status(500).send({ message: err.message });
            };
        });
    };

    static deleteAccount = (req, res) => {
        const id = req.params.id;
        accounts.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Account removed successfully.'});
            }else {
                res.status(500).send({message: err.message});
            };
        });
    };
};

export default AccountController