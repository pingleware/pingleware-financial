const Financial = require("../index");


/**
 * In this example, the calculateXIRR function takes an array of cash flows, an array of corresponding dates, 
 * and an optional initial guess for the internal rate of return. It uses the Newton-Raphson method to iteratively 
 * find the rate that makes the present value of the cash flows zero. The calculateDaysBetween function calculates 
 * the number of days between two dates. The iteration continues until the present value is close enough to zero 
 * or the maximum number of iterations is reached.
 */

// Example usage:
let cashFlows = [-1000, 200, 300, 400, 500]; // Cash flows for each period
let dates = ['2022-01-01', '2022-04-01', '2022-07-01', '2022-10-01', '2023-01-01']; // Corresponding dates

let xirrResult = Financial.XIRR(cashFlows, dates);

console.log('XIRR Result:', xirrResult);
