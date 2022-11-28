
//let users = [];

export function createUserUseCase (name, email, password){
    
    /*
    Criando o objeto
    */
    const user = {
        id: users.length + 1,
        name,
        email,
        password,
        createdDate: new Date().toUTCString()
    }

    /*
    .push: adiciona novos elementos ao final do array
    */
    users.push(user);
    return user;
}

/*  
    Testando a função

    createUserUseCase("Jessica Moraes", "jessica@gmail.com", "jessica@123");
    createUserUseCase("Camila dos Santos", "camila@gmail.com", "camis@456");
    createUserUseCase("Luan da Silva", "luan__22@gmail.com", "feilor");

    console.log(users)
*/