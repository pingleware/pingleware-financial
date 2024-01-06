const Financial = require("../index");


/**
 * In this example, the calculateSYD function takes the initial cost of the asset (cost), 
 * the salvage value (value of the asset at the end of its useful life), the useful life of the asset (usefulLife), 
 * and the current period (period) as parameters. 
 * It then calculates the depreciation for the specified period using the sum of years' digits method.
 * 
 * The calculateSumOfYearsDigits function calculates the sum of years' digits for a given useful life.
 */

// Example usage:
let assetCost = 10000;      // Initial cost of the asset
let salvageValue = 2000;    // Value of the asset at the end of its useful life
let usefulLife = 5;         // Useful life of the asset
let period = 3;             // Current period

let sumOfYearsDigitsDepreciation = Financial.SYD(assetCost, salvageValue, usefulLife, period);

console.log('Sum of Years\' Digits Depreciation for Period ' + period + ':', sumOfYearsDigitsDepreciation.toFixed(2)); // Sum of Years' Digits Depreciation for Period 3: 1600.00

