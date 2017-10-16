// ## Instructions

// ### Challenge #1: Customer View (Minimum Requirement)

// 1. Create a MySQL Database called `bamazon`.

// 2. Then create a Table inside of that database called `products`.

// 3. The products table should have each of the following columns:

//    * item_id (unique id for each product)

//    * product_name (Name of product)

//    * department_name

//    * price (cost to customer)

//    * stock_quantity (how much of the product is available in stores)

// 4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

// 5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

// 6. The app should then prompt users with two messages.

//    * The first should ask them the ID of the product they would like to buy.
//    * The second message should ask how many units of the product they would like to buy.

// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

//    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.


// prompt
	// welcome to Bamazon
		// fucntion to display all of products (only display id name price only)
		
	


// function showing all of products

// function basic options
	// prompt
		// ask them to enter the id of the product they would like to buy
		// promise
			// if they entered the id, then run buying function
			// if no, exit

// function for buying
	// prompt
		// ask quanity of item to purchase	
			// store id
			// store quantity
			// run function for purchasing

// function for purchasing
	// if quanity not avail
		// log sorry, not avail
	// if quanity avail, 
		// get the total cost
		// display						











// additions/ideas


// prompt
	// welcome to Bamazon
		// display all of products (only display id name price only)
	// Would you like to refine your search?
		// if not, then run basic options function
		// if yes, run additional options function
	


// function showing all of products

// function basic options
	// prompt
		// ask them to enter the id of the product they would like to buy

// function additional options
	// list
		// ask user to search by 
			// price (low to high)
			// item id
			// product name
			// department			


// function showing all of products by price
	// prompt
		// ask, sort by low to high or high to low
			// list
				// low to high
				// high to low
		// list them		


// function showing all items by id

// function showing product names sorted
	// prompt
		// ask how they would like the products sorted
			// list
				// by a-z
				// by z-a
	// list them

// function showing products by department
	// prompt
		// list
			// list of departments to select
	// show items only in the specific department selected						


// function for placing an order
	// prompt
		// then ask how many units of the product they would like to buy
			// check if there is enough stock
		// place order
			// update database
			// show purchase total
		// if not enough quantity, then display insufficient quantity, and show the quanitity available








