// MANAGER VIEW

// PROMPT
	// list of choices:
		// View Products for Sale
		// View Low Inventory
		// Add to Inventory
		// Add New Product
	// THEN
		// switch
			// functions for corresponding responses



// VIEW PRODUCTS FOR SALE 
//function showing all of products (item id, name, price, quantity)
function showProducts() {
    connection.query('SELECT * FROM products', function(error, response) {
        if (error) console.log(error);
        console.log(response);
        purchasePrompt();
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