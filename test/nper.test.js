const Financial = require("../index");

/**
 * n this example, the calculateNPER function takes the loan amount (principal), annual interest rate, 
 * and the fixed payment amount as parameters. It then calculates the number of periods using the NPER formula. 
 * The example demonstrates how to use this function with specific values and prints the result to the console.
 */

// Example usage:
let loanAmount = 10000;   // Loan amount or principal
let annualInterestRate = 0.06;  // Annual interest rate (6%)
let monthlyPayment = 322.18;  // Monthly payment

let numberOfPeriods = Financial.NPER(loanAmount, annualInterestRate, monthlyPayment);

console.log('Number of Periods:', numberOfPeriods.toFixed(2)); // Number of Periods: 33.81
