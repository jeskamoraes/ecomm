//let users = [];

import { saveAccount } from '../repositories/accountRepository.js';
import { randomUUID } from 'crypto';
import hashpassword from '../helpers/password.js';

export async function createAccountUseCase (name, email, password){
    
//    const accountAlreadyExists = await findAccountByEmail(email);

//    if(accountAlreadyExists) {
//     console.error('Account already exists', email);
//     return;
//    }

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