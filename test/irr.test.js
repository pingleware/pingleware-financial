const Financial = require("../index");

/**
 * In this example, the calculateIRR function uses the Newton-Raphson method to iteratively find the rate 
 * that makes the NPV of the cash flows zero. The calculateNPV function is used to compute the NPV for a given rate, 
 * and calculateNPVDerivative computes the derivative of the NPV with respect to the rate. 
 * The iteration continues until the NPV is close enough to zero or the maximum number of iterations is reached.
 */

// Example usage:
let cashFlows = [-1000, 200, 300, 400, 500]; // Initial investment and subsequent cash flows

let irrResult = Financial.IRR(cashFlows);

console.log('Internal Rate of Return:', irrResult); // nternal Rate of Return: 0.12825726862137032

console.log('Internal Rate of Return [%]:', Number(irrResult * 100).toFixed(2)); // Internal Rate of Return [%]: 12.83
