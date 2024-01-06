const Financial = require("../index");

/**
 * In this example, the calculateXNPV function takes an array of cash flows, an array of corresponding dates, 
 * and a discount rate as parameters. It calculates the present value of each cash flow based on the discount rate 
 * and the number of days between the cash flow date and the start date. The present values are then summed up to obtain 
 * the net present value (XNPV). The calculateDaysBetween function calculates the number of days between two dates.
 */

// Example usage:
let cashFlows = [-1000, 200, 300, 400, 500]; // Cash flows for each period
let dates = ['2022-01-01', '2022-04-01', '2022-07-01', '2022-10-01', '2023-01-01']; // Corresponding dates
let discountRate = 0.1; // Discount rate (10%)

let xnpvResult = Financial.XNPV(cashFlows, dates, discountRate);

console.log('XNPV Result:', xnpvResult); // XNPV Result: 308.5287805768332