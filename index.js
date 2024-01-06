"use strict"

class Financial {
    MAX_ITERATIONS;
    PRECISION;

    constructor(_MAX_ITERATIONS=1000,_PRECISION=0.00001) {
        this.MAX_ITERATIONS = _MAX_ITERATIONS;
        this.PRECISION = _PRECISION;
    }

    // PV (Present Value):** Calculates the present value of an investment based on a series of future cash flows and a discount rate.
    PV(futureValue, interestRate, periods) {
        // Formula for Present Value: PV = FV / (1 + r)^n
        return futureValue / Math.pow(1 + interestRate, periods);
    }
    PV(initialInvestment, cashFlows, rate, periods) {
        let pv = -initialInvestment; // Initial investment is an outgoing cash flow
    
        for (let i = 0; i < cashFlows.length; i++) {
            pv += cashFlows[i] / Math.pow(1 + rate, i + 1);
        }
    
        return pv;
    }
    PVDerivative(cashFlows, rate, periods) {
        let derivative = 0;
    
        for (let i = 0; i < cashFlows.length; i++) {
            derivative += -((i + 1) * cashFlows[i]) / Math.pow(1 + rate, i + 2);
        }
    
        return derivative;
    }
    
    // FV (Future Value):** Computes the future value of an investment based on a series of periodic payments and a specified interest rate.
    FV(initialAmount, interestRate, periods) {
        // Formula for Future Value: FV = PV * (1 + r)^n
        return initialAmount * Math.pow(1 + interestRate, periods);
    }
    
    // NPV (Net Present Value):** Calculates the net present value of an investment by discounting all future cash flows to their present value and subtracting the initial investment.
    NPV(initialInvestment, cashFlows, discountRate) {
        // NPV = PV(initial investment) + PV(cash flow 1) + PV(cash flow 2) + ...
        let npv = -initialInvestment; // Initial investment is an outgoing cash flow
    
        for (let i = 0; i < cashFlows.length; i++) {
            npv += this.PV(cashFlows[i], discountRate, i + 1);
        }
    
        return npv;
    }

    NPV(cashFlows, rate) {
        let npv = 0;
    
        for (let i = 0; i < cashFlows.length; i++) {
            npv += cashFlows[i] / Math.pow(1 + rate, i + 1);
        }
    
        return npv;
    }
    
    NPVDerivative(cashFlows, rate) {
        let derivative = 0;
    
        for (let i = 0; i < cashFlows.length; i++) {
            derivative += -((i + 1) * cashFlows[i]) / Math.pow(1 + rate, i + 2);
        }
    
        return derivative;
    }
    

    // IRR (Internal Rate of Return):** Determines the internal rate of return for a series of cash flows, providing the discount rate that makes the net present value zero.
    IRR(cashFlows) {
        let irr = 0.1; // Initial guess for the internal rate of return
        let iteration = 0;
    
        do {
            let npv = this.NPV(cashFlows, irr);
            let derivative = this.NPVDerivative(cashFlows, irr);
    
            // Newton-Raphson method
            irr = irr - npv / derivative;
    
            iteration++;
        } while (Math.abs(this.NPV(cashFlows, irr)) > this.PRECISION && iteration < this.MAX_ITERATIONS);
    
        return irr;
    }

    // PMT (Payment):** Calculates the periodic payment for an annuity or loan, considering a fixed interest rate and a fixed payment schedule.
    PMT(principal, interestRate, periods) {
        // PMT = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
        const r = interestRate / 12; // Monthly interest rate
        const n = periods; // Number of periods
    
        const pmt = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
        return pmt;
    }
    

    // RATE:** Determines the interest rate for a loan or investment based on a series of equal periodic payments.
    RATE(initialInvestment, cashFlows, periods) {
        let rate = 0.1; // Initial guess for the rate
        let iteration = 0;
    
        do {
            let pv = this.PV(initialInvestment, cashFlows, rate, periods);
            let derivative = this.PVDerivative(cashFlows, rate, periods);
    
            // Newton-Raphson method
            rate = rate - pv / derivative;
    
            iteration++;
        } while (Math.abs(this.PV(initialInvestment, cashFlows, rate, periods)) > this.PRECISION && iteration < this.MAX_ITERATIONS);
    
        return rate;
    }
    

    // NPER (Number of Periods):** Computes the number of periods required for an investment or loan based on a fixed interest rate and periodic payments.
    NPER(principal, interestRate, payment) {
        // NPER = -log(1 - (P * r) / PMT) / log(1 + r)
        const r = interestRate / 12; // Monthly interest rate
    
        const nper = -Math.log(1 - (principal * r) / payment) / Math.log(1 + r);
    
        return nper;
    }
    

    // CUMIPMT (Cumulative Interest Payment):** Calculates the cumulative interest paid between two specified periods in a loan.
    CUMIPMT(initialPrincipal, annualInterestRate, periods, startPeriod, endPeriod) {
        const monthlyInterestRate = annualInterestRate / 12;
        let cumulativeInterest = 0;
    
        for (let i = startPeriod; i <= endPeriod; i++) {
            // Calculate interest for the current period
            let interestForPeriod = (initialPrincipal - cumulativeInterest) * monthlyInterestRate;
            
            // Add the interest to the cumulative total
            cumulativeInterest += interestForPeriod;
        }
    
        return cumulativeInterest;
    }

    // CUMPRINC (Cumulative Principal Payment):** Computes the cumulative principal paid on a loan between two specified periods.
    CUMPRINC(initialPrincipal, annualInterestRate, periods, startPeriod, endPeriod) {
        const monthlyInterestRate = annualInterestRate / 12;
        let cumulativePrincipal = 0;
    
        for (let i = startPeriod; i <= endPeriod; i++) {
            // Calculate the remaining balance before the payment
            let remainingBalance = initialPrincipal - cumulativePrincipal;
    
            // Calculate the principal repayment for the current period
            let principalRepayment = initialPrincipal / periods;
    
            // Deduct the principal repayment from the remaining balance
            remainingBalance -= principalRepayment;
    
            // Add the principal repayment to the cumulative total
            cumulativePrincipal += principalRepayment;
        }
    
        return cumulativePrincipal;
    }

    // XIRR (Extended Internal Rate of Return):** Calculates the internal rate of return for irregular cash flows that may not occur at regular intervals.
    XIRR(cashFlows, dates, guess) {
    
        let irr = guess || 0.1; // Initial guess for the internal rate of return
        let iteration = 0;
    
        let numerator = 0;
        let denominator = 0;
    
        do {
            numerator = 0;
            denominator = 0;
    
            for (let i = 0; i < cashFlows.length; i++) {
                let days = this.DaysBetween(dates[0], dates[i]);
                let presentValue = cashFlows[i] / Math.pow(1 + irr, days / 365);
    
                if (isNaN(presentValue) || !isFinite(presentValue)) {
                    // Handle NaN or infinite result
                    return null; // or another designated value
                }
    
                numerator += presentValue;
                denominator += 1 / Math.pow(1 + irr, days / 365);
            }
    
            // Newton-Raphson method
            irr = irr - numerator / denominator;
    
            iteration++;
        } while (Math.abs(numerator) > this.PRECISION && iteration < this.MAX_ITERATIONS);
    
        if (isNaN(irr) || !isFinite(irr)) {
            // Handle NaN or infinite result after iterations
            return null; // or another designated value
        }
    
        return irr;        
    }
    DaysBetween(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
        const firstDate = new Date(date1);
        const secondDate = new Date(date2);
    
        return Math.round(Math.abs((firstDate - secondDate) / oneDay));
    }
    

    // XNPV (Extended Net Present Value):** Determines the net present value for irregular cash flows that may not occur at regular intervals.
    XNPV(cashFlows, dates, discountRate) {
        let npv = 0;
    
        for (let i = 0; i < cashFlows.length; i++) {
            let days = this.DaysBetween(dates[0], dates[i]);
            let presentValue = cashFlows[i] / Math.pow(1 + discountRate, days / 365);
            npv += presentValue;
        }
    
        return npv;
    }

    // SLN (Straight-Line Depreciation):** Calculates the straight-line depreciation of an asset over its useful life.
    SLN(cost, salvageValue, usefulLife) {
        // SLN = (cost - salvage value) / useful life
        return (cost - salvageValue) / usefulLife;
    }

    // DB (Double Declining Balance Depreciation):** Computes the depreciation of an asset using the double declining balance method.
    DB(cost, salvageValue, usefulLife, period) {
        // DB = 2 * (cost - accumulated depreciation) / remaining life
        let remainingLife = usefulLife - period + 1;
        let accumulatedDepreciation = this.AccumulatedDepreciation(cost, salvageValue, usefulLife, period - 1);
    
        return (2 * (cost - accumulatedDepreciation)) / remainingLife;
    }
    AccumulatedDepreciation(cost, salvageValue, usefulLife, period) {
        // Accumulated Depreciation = DB for Period 1 + DB for Period 2 + ... + DB for Period N
        let accumulatedDepreciation = 0;
    
        for (let i = 1; i <= period; i++) {
            accumulatedDepreciation += this.DB(cost, salvageValue, usefulLife, i);
        }
    
        return accumulatedDepreciation;
    }

    // SYD (Sum of Years' Digits Depreciation):** Determines the depreciation of an asset using the sum of years' digits method.
    SYD(cost, salvageValue, usefulLife, period) {
        // SYD = (remaining life / sum of years' digits) * (cost - salvage value)
        let remainingLife = usefulLife - period + 1;
        let sumOfYearsDigits = this.SumOfYearsDigits(usefulLife);
    
        return (remainingLife / sumOfYearsDigits) * (cost - salvageValue);
    }
    SumOfYearsDigits(usefulLife) {
        // Sum of Years' Digits = n * (n + 1) / 2
        return (usefulLife * (usefulLife + 1)) / 2;
    }

    // VLOOKUP:** Searches for a value in a table and returns a corresponding value.
    VLOOKUP(searchValue, table, columnToRetrieve, defaultValue) {
        for (let i = 0; i < table.length; i++) {
            if (table[i][0] === searchValue) {
                return table[i][columnToRetrieve];
            }
        }
    
        // Return default value if not found
        return defaultValue;
    }
}

module.exports = new Financial();