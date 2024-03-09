const add = function (num1, num2) {
  let sum = num1 + num2
  return sum;
};

const subtract = function (num1, num2) {
  let sum = num1 - num2;
  return sum;
};

const sum = function (array) {
    return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (array) {
  return array.reduce((acc, curr) => acc * curr);
};

const power = function (num, pow) {
  return Math.pow(num, pow);
};

const factorial = function (num) {
  let result = num;
  
  if (num < 0) {
    return -1
  }
  else if (num == 0) {
    return 1
  }
  else {
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
