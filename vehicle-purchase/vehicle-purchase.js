// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return (kind === 'car' || kind === 'truck');
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */

const rest = ' is clearly the better choice.';
export function chooseVehicle(option1, option2) {
  if (option1 < option2)
    return option1 + rest;
  else return option2 + rest;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
const minAge = 3;
const maxAge = 10;
const discount1 = 0.8; // if vehicle is less than 3 years old
const discount2 = 0.7; // vehicle is at least 3 years old but not older than 10 years
const discount3 = 0.5; // it vehicle is more than 10 years old

export function calculateResellPrice(originalPrice, age) {
  if (age < minAge)
    return originalPrice * discount1;
  else if (minAge <= age && age <= maxAge)
    return originalPrice * discount2;
  else return originalPrice * discount3;

}

