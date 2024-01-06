const Financial = require("../index");

/**
 * This example defines a function presentValue that takes the future value (futureValue), 
 * annual interest rate (interestRate), and the number of periods (periods) as parameters 
 * and calculates the present value using the formula PV = FV / (1 + r)^n. 
 * 
 * The example then demonstrates how to use the function with specific values and prints the result to the console.
 */

// Example usage:
let futureValue = 1000;   // Future value of the investment
let interestRate = 0.05; // Annual interest rate (5%)
let periods = 3;         // Number of periods

let presentVal = Financial.PV(futureValue, interestRate, periods);

console.log('Present Value:', presentVal); // expected: Present Value: 863.837598531476
