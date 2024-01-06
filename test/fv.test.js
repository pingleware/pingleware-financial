const Financial = require("../index");

/**
 * In this example, the futureValue function takes the initial amount (present value), 
 * annual interest rate, and the number of periods as parameters. 
 * It then calculates the future value using the formula FV = PV * (1 + r)^n. 
 * 
 * The example demonstrates how to use this function with specific values and prints the result to the console.
 */

// Example usage:
let initialAmount = 1000;  // Initial amount or present value
let interestRate = 0.05;  // Annual interest rate (5%)
let periods = 3;          // Number of periods

let futureVal = Financial.FV(initialAmount, interestRate, periods);

console.log('Future Value:', futureVal); // expected: Future Value: 1157.6250000000002