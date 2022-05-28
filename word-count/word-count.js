//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (string) => {
    let strList = string.toLowerCase().match(/\w+(\'\w+)?/g);
  let output = {};
  strList.forEach( i => {
    output[i] ? output[i] += 1 : output[i] = 1;
  });

  return output;
};
