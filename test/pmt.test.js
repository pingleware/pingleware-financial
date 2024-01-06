const Financial = require("../index");

/**
 * In this example, the calculatePMT function takes the loan amount (principal), 
 * annual interest rate, and the number of periods (loan term in years multiplied by 12 
 * for monthly payments) as parameters. It then calculates the monthly payment using the PMT formula. 
 * 
 * The example demonstrates how to use this function with specific values and prints the result to the console.
 */

// Example usage:
let loanAmount = 10000;   // Loan amount or principal
let annualInterestRate = 0.06;  // Annual interest rate (6%)
let loanTermInYears = 3;  // Loan term in years

let monthlyPayment = Financial.PMT(loanAmount, annualInterestRate, loanTermInYears * 12);

console.log('Monthly Payment:', monthlyPayment.toFixed(2)); // Monthly Payment: 304.22