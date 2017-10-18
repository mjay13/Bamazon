// MANAGER VIEW
// dependencies used

var mysql = require('mysql');
var inquirer = require('inquirer');

// database connection
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 8889,
    user: "root",
    password: "root",
    database: "Bamazon_DB"
});

// start
console.log("Managerial Department");
managerPrompt();


// MANAGER PROMPT
function managerPrompt() {
    inquirer.prompt([{
        name: "action",
        type: "list",
        message: "Select an action:",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]

    }]).then(function(answers) {
        switch (answers.action) {
            case "View Products for Sale":
                return showProducts();

            case "View Low Inventory":
                return viewLowInventory();

            case "Add to Inventory":
                return addInventory();

            case "Add New Product":
                return createNewProduct();
        }
    });
}


// VIEW PRODUCTS FOR SALE 
//function showing all of products (item id, name, price, quantity)
function showProducts() {
    connection.query('SELECT * FROM products', function(error, response) {
        if (error) console.log(error);
        console.log(response);
        managerPrompt();
    });
}

// VIEW LOW INVENTORY 
//function to view inventory via lower than 5
function viewLowInventory() {

}

// ADD TO INVENTORY 
//function to add to inventory (already existing)
// prompt
// add more to inventory
function addInventory() {

}

// ADD NEW PRODUCT function to create a new product
// prompt
// add compelety new product
function createNewProduct() {

}