//declare NPM dependencies -- referenced week 13, activity 14
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

//set up SQL connection
const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "EileenJSul",

    // Your password
    password: "",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    connection.query('SELECT * FROM products', function (err, res) {
        console.table(res);
        // referenced week 12 - activity 10
        runSearch();
    });
});

// create function that asks which product and how many customer wants to buy
function runSearch() {
    // referenced npm documentation
    inquirer.prompt([
        {
            name: "action",
            type: "input",
            message: "What is the ID of the product you would like to purchase?",
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?",
        }
    ])
    // referenced week 12, activity 10
        .then(function (answer) {
            var productID = answer.action;
            var purchaseQuantity = answer.quantity;
            var query = 'SELECT * FROM products WHERE ?';
            connection.query(query, { item_id: answer.action }, function (err, res) {
            // if enough, fulfill the order. Update SQL database and show total cost of purchase
            // create array where it starts at [0]; referenced mySQL documentation
                if (purchaseQuantity <= res[0].stock_quantity) {
                    console.log("Your product is in stock! The order is being placed now.");
                    var updateQuery = 'UPDATE products SET stock_quantity ='+ (res[0].stock_quantity-purchaseQuantity) + ' WHERE item_id = '+ (productID);
                    connection.query(updateQuery, function (err, res) {
                    });
                    var totalCost = purchaseQuantity * res[0].price;
                    console.log("The total cost of your purchase is:" + totalCost); 
                }
                // )}
                else {
                    console.log("Insufficient quantity!");
            
                }
            });
        });
};

