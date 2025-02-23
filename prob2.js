let maths = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;

let total = maths + biology + chemistry + physics + bangla;
let averageTotal = total / 5;

let averageFloat = parseFloat(averageTotal.toFixed(2));  // Convert to float after rounding

console.log(total);
console.log(averageFloat);  // This will be a float with 2 decimal places
