CREATE DATABASE db_products;

USE db_products;

DESCRIBE products;

CREATE TABLE IF NOT EXISTS products(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    value INT NOT NULL,
    quantity INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    featurename VARCHAR(255),
    featuredescription VARCHAR(255),
    imageurl VARCHAR(255) NOT NULL,
    imagedescription VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

INSERT INTO products(id, name, value, quantity, description, category, featurename, featuredescription, imageurl, imagedescription, createdAt, updatedAt) 
VALUES (1,"Celular", 15000, 5, "Iphone","Eletrônico","Produto 1", "Descrição 1", "url", "Descrição da url", "2022-04-01 08:37:12", "2022-04-01 08:37:12");
INSERT INTO products(id, name, value, quantity, description, category, featurename, featuredescription, imageurl, imagedescription, createdAt, updatedAt) 
VALUES (2,"Notebook", 100000, 2, "Mac","Eletrônico","Produto 2", "Descrição 2", "url", "Descrição da url", "2022-04-01 09:05:12", "2022-04-01 09:05:12");

SELECT * FROM products;