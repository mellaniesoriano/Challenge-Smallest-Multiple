/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here
  var newArr = [];
  var quotient = 0;
  var loop = 1;
  var j = 0;

  for (var i = 1; i <= ceiling; i++) {
    newArr.push(i);
  }

  newArr.sort();

  do {
    quotient = newArr[0] * loop * newArr[1];
    for (j = 2; j < newArr.length; j++) {
      if (quotient % newArr[j] !== 0) {
        break;
      }
    }
    loop++;
  } while (j !== newArr.length);

  return quotient;
};

