const Financial = require("../index");

/**
 * In this example, the calculateRate function uses the Newton-Raphson method to iteratively 
 * find the rate that makes the present value of the cash flows zero. 
 * The calculatePresentValue function is used to compute the present value for a given rate, 
 * and calculatePresentValueDerivative computes the derivative of the present value with respect to the rate. 
 * 
 * The iteration continues until the present value is close enough to zero or the maximum number of iterations is reached.
 */

// Example usage:
let initialInvestment = 1000;  // Initial investment (negative because it's an outgoing cash flow)
let cashFlows = [200, 300, 400];  // Cash flows for each period
let periods = 3;  // Number of periods

let rateResult = Financial.RATE(initialInvestment, cashFlows, periods);

console.log('Interest Rate:', rateResult); // Interest Rate: -0.0460134061282999
