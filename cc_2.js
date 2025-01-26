// Task 1: Working with Arrays //
let products = ["Cheerios", "Trix", "Rasin Bran", "Capitan Crunch", "Cinnamon Toast Crunch"];    // Array of products

products.push("Trix");    // Add new product to the end of the array

console.log(products);    // Print the array of products

products.pop();    // Remove the last product from the array

console.log("Updated products:",products);    // Print the array of products

// Task 2: Accessing and Modifying Arrays //
let scores = [100, 90, 85, 95, 65];    // Array of scores
scores[1] = 95;    // Modify the second element of the array

let total = scores.reduce((a, b) => a + b, 0);    // Calculate the total of the scores
let average = total / scores.length;    // Calculate the average of the scores

console.log("Updated Scores:", scores);    // Print the updated array of scores
console.log(total);    // Print the sum of the scores
console.log("Average Score:",average);    // Print the average of the scores')

// Task 3: Working with Objects //
let employee = {
    name: "Tom Brady",
    age: 25,
    department: "HR",
    isActive: true
};    // Object of employee

console.log(employee);    // Print the object of employee

employee.department = "Customer Service";    // Modify the department of the employee
employee.position = "Manager";    // Add a new property to the employee

console.log(employee);    // Print the object of employee

// Task 4: Array of Objects //
let customers = [
    {name: "Tom Brady", email: "Brady@gmail.com", purchaseAmount: 100},
    {name: "Trevor Lawrence", email: "Lawrence@gmail.com", purchaseAmount: 200},
    {name: "Mike Evans", email: "Evans@gmail.com", purchaseAmount: 300}
];    // Array of objects of customers

console.log(customers);    // Print the array of objects of customers

customers.push({name: "Franklin Clinton", email: "Clinton@gmail.com", purchaseAmount: 400});    // Add a new customer to the array

console.log(customers);    // Print the array of objects of customers

// Task 5: Object Methods //
let order = {
    orderId: "101",
    customerName: "Tom Brady",
    amount: 50,
    calculateTax: function() {
        const taxRate = 0.10;    // Tax rate
        return this.amount * taxRate;    // Calculate the tax amount
    }
};    // Object of order

console.log(order);    // Print the object of order
console.log(order.calculateTax());    // Print the tax amount