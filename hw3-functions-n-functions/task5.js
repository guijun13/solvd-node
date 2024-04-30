function lazyMap(arr, mappingFunction) {
  let index = 0;
  const iterator = {
    next: function () {
      if (index < arr.length) {
        const result = mappingFunction(arr[index]);
        index++;
        return { value: result, done: false };
      } else {
        return { done: true };
      }
    },
  };
  iterator[Symbol.iterator] = function () {
    return this;
  };
  return iterator;
}

// Example usage
const array = [1, 2, 3, 4, 5];
const lazyMapped = lazyMap(array, (x) => x * 2);

for (const value of lazyMapped) {
  console.log(value);
}

console.log('\nFibonacci sequence:');
function fibonacciGenerator() {
  let a = 0;
  let b = 1;

  return {
    next: function () {
      const current = a;
      [a, b] = [b, a + b];
      return current;
    },
  };
}

const fibGen = fibonacciGenerator();
for (let i = 0; i < 99; i++) {
  console.log(fibGen.next());
}
