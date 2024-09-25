const reverseString = function (stringToReverse) {
  let result = "";

  for (let i = stringToReverse.length - 1; i >= 0; i--) {
    result += stringToReverse[i];
  }

  return result;
};

// Do not edit below this line
module.exports = reverseString;
