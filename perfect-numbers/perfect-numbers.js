//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.


export const classify = (number) => {
  var sum = 0;
  var string = '';
  if (number <= 0)
    throw new Error('Classification is only possible for natural numbers.');

  for (let i = 1; i < number; i++) {
    if (number % i == 0)
      sum += i;
  }

  if (sum < number)
    string = 'deficient';
  else if (sum == number)
    string = 'perfect';
  else string = 'abundant';

  return string;
};
