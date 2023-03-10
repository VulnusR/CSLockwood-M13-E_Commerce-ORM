-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- Categories table
CREATE TABLE categories (
  id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

-- Products table
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL,
  category_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);