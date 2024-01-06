const Financial = require("../index");


/**
 * In this example, the calculateSLN function takes the initial cost of the asset (cost), 
 * the salvage value (value of the asset at the end of its useful life), and the useful life of the asset (usefulLife) as parameters. 
 * It then calculates the straight-line depreciation using the formula SLN = (cost - salvage value) / useful life.
 */

// Example usage:
let assetCost = 10000;      // Initial cost of the asset
let salvageValue = 2000;    // Value of the asset at the end of its useful life
let usefulLife = 5;         // Useful life of the asset

let straightLineDepreciation = Financial.SLN(assetCost, salvageValue, usefulLife);

console.log('Straight-Line Depreciation:', straightLineDepreciation.toFixed(2)); // Straight-Line Depreciation: 1600.00
