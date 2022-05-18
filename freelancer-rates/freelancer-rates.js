// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

const WORKING_HOURS_PER_DAY = 8;
const WHOLE_MONTH_DAYS = 22;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  if (ratePerHour > 0)
    return (WORKING_HOURS_PER_DAY * ratePerHour)
  throw new Error('Remove this line and implement the function');
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  if (budget > 0 && ratePerHour != 0) {
    return (
      Math.floor(budget / dayRate(ratePerHour))
    )
  }
  throw new Error('Remove this line and implement the function');
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */

let numOfMonths = 0;
let notDiscountedDays = 0;
let tatalRate = 0;
let discountedDays = 0;

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  if (ratePerHour != 0 && numDays > 0) {
    numOfMonths = Math.floor(numDays / WHOLE_MONTH_DAYS);
    discountedDays = numOfMonths * WHOLE_MONTH_DAYS;
    notDiscountedDays = numDays - discountedDays;
    tatalRate = Math.ceil(dayRate(ratePerHour) * (discountedDays * (1 - discount) + notDiscountedDays));
    return tatalRate;
  }
  throw new Error('Remove this line and implement the function');
}
