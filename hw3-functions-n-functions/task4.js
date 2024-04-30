function calculateFactorial(num, accumulator = 1) {
  if (num < 2) {
    return accumulator;
  } else {
    return calculateFactorial(num - 1, num * accumulator);
  }
}

console.log(calculateFactorial(99));

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(20, 31));
