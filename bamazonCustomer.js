var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
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
    runSearch();
});

//   create function that asks which product and how many customer wants to buy
function runSearch() {
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
    .then(function (answer) {
        var productID = answer.action;
        var purchaseQuantity = answer.quantity;
        var query = 'SELECT * FROM products WHERE ?';
        connection.query(query, {item_id:answer.action}, function (err, res) {

            if (purchaseQuantity <= res[0].stock_quantity) {
                console.log("Your product is in stock!");
            }

            else if (purchaseQuantity > res[0].stock_quantity) {
                console.log("Insufficient quantity!")
            }

                });
            });
}

//   create function to check if store has enough product, if not enough product, prevent order w/ "insufficient qty"
function productAvailability() {


}

// if enough, fulfill the order. Update SQL database and show total cost of purchase
function productSufficiency() {

}