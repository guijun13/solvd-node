const testArray = Array(100).fill(Math.random());

function measureArrayPerformance(func, array) {
  const startTime = performance.now();
  func(array);
  const endTime = performance.now();
  return endTime - startTime;
}

function customMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

function customlength(array) {
  return array.reduce((acc) => acc + 1, 0);
}

function customFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

function customReduce(array, callback, initialValue) {
  let accumulator = initialValue === undefined ? array[0] : initialValue;
  const startIndex = initialValue === undefined ? 1 : 0;
  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

const builtInMapTime = measureArrayPerformance((arr) => arr.map((x) => x * 2), testArray);
console.log('Built-in map execution time:', builtInMapTime.toFixed(4), 'ms');

const customMapTime = measureArrayPerformance((arr) => customMap(arr, (x) => x * 2), testArray);
console.log('Custom map execution time:', customMapTime.toFixed(4), 'ms');

const builtInLengthTime = measureArrayPerformance((arr) => arr.length, testArray);
console.log('Built-in length execution time:', builtInLengthTime.toFixed(4), 'ms');

const customlengthTime = measureArrayPerformance((arr) => customlength(arr), testArray);
console.log('Custom length execution time:', customlengthTime.toFixed(4), 'ms');

const builtInFilterTime = measureArrayPerformance((arr) => arr.filter((x) => x > 2), testArray);
console.log('Built-in filter execution time:', builtInFilterTime.toFixed(4), 'ms');

const customFilterTime = measureArrayPerformance(
  (arr) => customFilter(arr, (x) => x > 2),
  testArray
);
console.log('Custom filter execution time:', customFilterTime.toFixed(4), 'ms');

const builtInReduceTime = measureArrayPerformance(
  (arr) => arr.reduce((acc, curr) => acc + curr, 0),
  testArray
);
console.log('Built-in reduce execution time:', builtInReduceTime.toFixed(4), 'ms');

const customReduceTime = measureArrayPerformance(
  (arr) => customReduce(arr, (acc, curr) => acc + curr, 0),
  testArray
);
console.log('Custom reduce execution time:', customReduceTime.toFixed(4), 'ms');
