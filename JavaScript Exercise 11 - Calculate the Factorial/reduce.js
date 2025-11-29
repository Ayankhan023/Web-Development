let num = 6;

// Create an array [1, 2, 3, 4, 5, 6]
let numbers = Array.from({ length: num }, (_, i) => i + 1);

// Use reduce to multiply all numbers
let factorial = numbers.reduce((acc, val) => acc * val, 1);

console.log(`Factorial of ${num} is: ${factorial}`);