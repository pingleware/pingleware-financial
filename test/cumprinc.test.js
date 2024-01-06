const Financial = require("../index");


/**
 * In this example, the calculateCumulativePrincipal function takes the loan amount (initial principal), 
 * annual interest rate, total number of periods, start period, and end period as parameters. 
 * It then iterates through the specified range of periods, calculates the principal repayment for each period, 
 * and accumulates the principal repayments to get the cumulative principal repayment between the specified periods.
 */

// Example usage:
let loanAmount = 10000;   // Loan amount or initial principal
let annualInterestRate = 0.05;  // Annual interest rate (5%)
let loanTermInYears = 3;  // Loan term in years
let startPeriod = 1;  // Start period
let endPeriod = 12;  // End period

let cumulativePrincipal = Financial.CUMPRINC(loanAmount, annualInterestRate, loanTermInYears * 12, startPeriod, endPeriod);

console.log('Cumulative Principal:', cumulativePrincipal.toFixed(2)); // Cumulative Principal: 3333.33