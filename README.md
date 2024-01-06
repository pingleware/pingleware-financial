# pingleware-financial

Common financial functions are often used in spreadsheet software like Microsoft Excel or Google Sheets to perform various calculations related to finance. Here's a list of some common financial functions:

1. **PV (Present Value):** Calculates the present value of an investment based on a series of future cash flows and a discount rate.
2. **FV (Future Value):** Computes the future value of an investment based on a series of periodic payments and a specified interest rate.
3. **NPV (Net Present Value):** Calculates the net present value of an investment by discounting all future cash flows to their present value and subtracting the initial investment.
4. **IRR (Internal Rate of Return):** Determines the internal rate of return for a series of cash flows, providing the discount rate that makes the net present value zero.
5. **PMT (Payment):** Calculates the periodic payment for an annuity or loan, considering a fixed interest rate and a fixed payment schedule.
6. **RATE:** Determines the interest rate for a loan or investment based on a series of equal periodic payments.
7. **NPER (Number of Periods):** Computes the number of periods required for an investment or loan based on a fixed interest rate and periodic payments.
8. **CUMIPMT (Cumulative Interest Payment):** Calculates the cumulative interest paid between two specified periods in a loan.
9. **CUMPRINC (Cumulative Principal Payment):** Computes the cumulative principal paid on a loan between two specified periods.
10. **XIRR (Extended Internal Rate of Return):** Calculates the internal rate of return for irregular cash flows that may not occur at regular intervals.
11. **XNPV (Extended Net Present Value):** Determines the net present value for irregular cash flows that may not occur at regular intervals.
12. **SLN (Straight-Line Depreciation):** Calculates the straight-line depreciation of an asset over its useful life.
13. **DB (Double Declining Balance Depreciation):** Computes the depreciation of an asset using the double declining balance method.
14. **SYD (Sum of Years' Digits Depreciation):** Determines the depreciation of an asset using the sum of years' digits method.
15. **VLOOKUP:** Searches for a value in a table and returns a corresponding value.

## Installation

`npm i @pingleware/financial`

## Usage

```
"use strict"

const Financial = require("@pingleware/financial");

let futureValue = 1000;   // Future value of the investment
let interestRate = 0.05; // Annual interest rate (5%)
let periods = 3;         // Number of periods

let presentVal = Financial.PV(futureValue, interestRate, periods);

console.log('Present Value:', presentVal); // expected: Present Value: 863.837598531476

```

## Release Schedule

|    Date    | Version | Description     |
| :--------: | :-----: | --------------- |
| 2024-01-06 |  1.0.0  | Initial release |
|            |        |                 |

## End-of-Life

When a piece of software is useful, there should never be an EOL doctrine. The intention for this application is to achieve immortality ;). At some point of time in the future, this project may appear to be dead and abandon. The opposite will be true! When this project reaches that stage, this project has matured to a level where maintenance is minimal (mostly updating to latest version of Node).

```
Patrick O. Ingle
January 6, 2024
```
