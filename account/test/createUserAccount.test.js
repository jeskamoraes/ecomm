import { createAccountUseCase } from '../src/use-case/createAccountUseCase.js';
//const createUserUseCase = require('../src/use-case/createUserAccount');

const user = createAccountUseCase('Jessica', 'jessica@gmail.com', '1234jess');

console.log(user);