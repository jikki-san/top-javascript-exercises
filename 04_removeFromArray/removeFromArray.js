const removeFromArray = function (arr, ...rest) {
  for (const element of rest) {
    arr = arr.filter((el) => el !== element);
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
