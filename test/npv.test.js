const Financial = require("../index");

/**
 * In this example, the calculateNPV function takes the initial investment, 
 * an array of cash flows, and the discount rate as parameters. 
 * It then uses the presentValue helper function to calculate the present value of each cash flow 
 * and sums them up to get the overall NPV. Finally, the example demonstrates how to use this function 
 * with specific values and prints the result to the console.
 */

// Example usage:
let initialInvestment = 1000;   // Initial investment (negative because it's an outgoing cash flow)
let cashFlows = [200, 300, 400]; // Cash flows for each period
let discountRate = 0.1;         // Discount rate (10%)

let npvResult = Financial.NPV(initialInvestment, cashFlows, discountRate);

console.log('Net Present Value:', npvResult); // expected: Net Present Value: -269.7220135236666