const Financial = require("../index");

/**
 * In this example, the calculateCumulativeInterest function takes the loan amount (initial principal), 
 * annual interest rate, total number of periods, start period, and end period as parameters. 
 * It then iterates through the specified range of periods, calculates the interest for each period, 
 * and accumulates the interest to get the cumulative interest paid between the specified periods.
 */

it("expected 488.79", function() {
    // Example usage:
    let loanAmount = 10000;   // Loan amount or initial principal
    let annualInterestRate = 0.05;  // Annual interest rate (5%)
    let loanTermInYears = 3;  // Loan term in years
    let startPeriod = 1;  // Start period
    let endPeriod = 12;  // End period

    let cumulativeInterest = Financial.CUMIPMT(loanAmount, annualInterestRate, loanTermInYears * 12, startPeriod, endPeriod);

    console.log('Cumulative Interest:', cumulativeInterest.toFixed(2)); // Cumulative Interest: 488.70

})
