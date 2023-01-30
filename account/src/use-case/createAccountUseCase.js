//let users = [];

import { saveAccount } from '../repositories/accountRepository.js';
import { randomUUID } from 'crypto';
import hashpassword from '../helpers/password.js';

export async function createAccountUseCase (name, email, password){
    const id = randomUUID();
    const createdDate = new Date().toISOString().substring(0, 10);
    const encodedPassword = await hashpassword(password);
   
    const user = {
        id,
        name,
        email,
        password: encodedPassword,
        createdDate
    }

    saveAccount(user);
    return user;
}
