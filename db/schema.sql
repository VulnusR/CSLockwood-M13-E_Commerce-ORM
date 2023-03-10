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

