// Task 1 Variables
let employeeName = "Mary Sue"
const employeeID = 321
var isActive = true
console.log("Employee Name:", employeeName, "Type:", typeof employeeName);
console.log("Employee ID:", employeeID, "Type:", typeof employeeID);
console.log("Is Active:", isActive, "Type:", typeof isActive);

// Task 2 Primitive Data Types
let productName = "Wirless Gaming Headset";
const productPrice = 129.99;
var isAvailable = true;

console.log("Product Name:", productName, "Type:", typeof productName);
console.log("Product Price:", productPrice, "Type:", typeof productPrice);
console.log("Is Available:", isAvailable, "Type:", typeof isAvailable);

// Task 3 Number Data Types
let accountBalance = 4000
console.log("Starting Account Balance:", accountBalance);

accountBalance += 200 // Deposit Made
console.log("After Deposit Made:", accountBalance);

accountBalance -= 200 // Account Withdraw
console.log("After Withdraw Made:", accountBalance);

accountBalance *= 1.08 // Accrued Intrest 
console.log("After Accrued Interest:", accountBalance);

accountBalance /= 2 // Depreciation
console.log("After Depreciation:", accountBalance);

// Task 4 String Data Type
let customerName = "John Doe"
let welcomeMessage = "Welcome, " + customerName + " Here you can find the best Gaming Headsets.";

console.log(welcomeMessage);

// Task 5 Boolean Data Type
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Acess Granted: User Sucessfully Logged In.");
} else {
    console.log("Access Denied: User not Logged In.");
}
