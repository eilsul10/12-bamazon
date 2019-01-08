create database bamazon;

use bamazon;

create table products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name varchar(50) not null,
department_name varchar(50) not null,
price decimal (10,2) not null,
stock_quantity int null,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hairbrush", "Beauty", 5.99, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Toy", "Pets", 10.09, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Water Bottle", "Sports", 11.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BBQ Sauce", "Groceries", 6.00, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hazelnut Coffee", "Groceries", 3.50, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lamp", "Furniture", 50.00, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Buffalo Sauce","Groceries", 6.00, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Socks", "Clothing", 3.99, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Starbucks Coffee", "Groceries", 3.50, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tesla Roadster", "Automotive", 200000, 1);
