//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.

const giga = 10 ** 12;

export const gigasecond = (date) => {
  let newdate = date.getTime(); //convert received date into milices
  newdate += giga; // added gigasec
  let nd = new Date(newdate);  // convert gs to date format
  return nd;
};
