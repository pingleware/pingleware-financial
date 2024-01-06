const Financial = require("../index");

/**
 * In this example, the calculateDB function takes the initial cost of the asset (cost), 
 * the salvage value (value of the asset at the end of its useful life), 
 * the useful life of the asset (usefulLife), and the current period (period) as parameters. 
 * It then calculates the double declining balance for the specified period.
 * 
 * The calculateAccumulatedDepreciation function calculates the accumulated depreciation up to the given period by summing 
 * the double declining balance for each period.
 */

// Example usage:
let assetCost = 10000;      // Initial cost of the asset
let salvageValue = 2000;    // Value of the asset at the end of its useful life
let usefulLife = 5;         // Useful life of the asset
let period = 3;             // Current period

let doubleDecliningBalance = Financial.DB(assetCost, salvageValue, usefulLife, period);

console.log('Double Declining Balance for Period ' + period + ':', doubleDecliningBalance.toFixed(2)); // Double Declining Balance for Period 3: 2000.00
