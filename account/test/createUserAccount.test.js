import { createUserUseCase } from '../src/use-case/createUserAccount.js';

let users = [
    createUserUseCase("Luara de Souza", "lua@hotmail.com", "545545Lu"),
    createUserUseCase("Camila dos Santos", "camila@gmail.com", "camis@456"),
    createUserUseCase("Luan da Silva", "luan__22@gmail.com", "feilor")
];

console.log(users);