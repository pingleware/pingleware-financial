const Financial = require("../index");

/**
 * In this example, the vlookup function takes a search value, a two-dimensional array (representing a table), 
 * the column index to retrieve, and a default value to return if the search value is not found. 
 * It then iterates through the rows of the table, searching for the specified value in the first column. 
 * If found, it returns the corresponding value from the specified column; otherwise, it returns the default value.
 */

// Example usage:
const data = [
    ['Apple', 10, 'Fruit'],
    ['Banana', 5, 'Fruit'],
    ['Carrot', 3, 'Vegetable'],
    ['Duck', 8, 'Meat']
];

const result = Financial.VLOOKUP('Banana', data, 1, 'Not Found');

console.log('Result:', result); // Result: 5