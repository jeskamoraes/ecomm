//let users = [];

import { saveAccount, listAccounts, findAccountByEmail, existsAccountByEmail } from '../repositories/accountRepository.js';

export async function createAccountUseCase (name, email, password){
    
   const accountAlreadyExists = await findAccountByEmail(email);

   if(accountAlreadyExists) {
    console.error('Account already exists', email);
    return;
   }
   
    const user = {
        name,
        email,
        password,
        createdDate: new Date().toUTCString()
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