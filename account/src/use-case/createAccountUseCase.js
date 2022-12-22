//let users = [];

import { saveAccount, findAccountByEmail } from '../repositories/accountRepository.js';
import { randomUUID } from 'crypto';
import bcrypt from 'bcryptjs';

function encode(password) {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}

export async function createAccountUseCase (name, email, password){
    
   const accountAlreadyExists = await findAccountByEmail(email);

   if(accountAlreadyExists) {
    console.error('Account already exists', email);
    return;
   }

    const id = randomUUID();
    const createdDate = new Date().toISOString().substring(0, 10);
    const encodedPassword = encode(password)
   
    const user = {
        id,
        name,
        email,
        encodedPassword,
        createdDate
    }

    saveAccount(user);
    /*
    .push: adiciona novos elementos ao final do array
    */
    //users.push(user);
    return user;
}

/*  
    Testando a função

    createUserUseCase("Jessica Moraes", "jessica@gmail.com", "jessica@123");
    createUserUseCase("Camila dos Santos", "camila@gmail.com", "camis@456");
    createUserUseCase("Luan da Silva", "luan__22@gmail.com", "feilor");

    console.log(users)
*/