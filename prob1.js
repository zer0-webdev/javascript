let orange = 200;
let apple = 300;

let cash = prompt("Enter the amount of cash:"); // Takes input from the user

// Convert the input to a number (since prompt returns a string)
cash = parseFloat(cash);

let result = cash - (orange + apple);

console.log(result);
