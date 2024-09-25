const isNumber = (val) => typeof val === "number";
const isInteger = (num) => Math.floor(num) === num;

const sumAll = function (a, b) {
  if (
    a < 0 ||
    b < 0 ||
    !isNumber(a) ||
    !isNumber(b) ||
    !isInteger(a) ||
    !isInteger(b)
  ) {
    return "ERROR";
  }

  const lower = a < b ? a : b;
  const upper = a < b ? b : a;
  let sum = 0;

  for (let i = lower; i <= upper; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
