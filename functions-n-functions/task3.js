// Create a function called createCounter that returns a closure. The closure should be a counter function that increments the count on each call and returns the updated count. Each closure should have its own independent count.
function createCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1
console.log(counter1()); // 3

function repeatFunction(fn, num) {
  return function () {
    if (num < 0) {
      while (true) {
        fn();
      }
    } else {
      for (let i = 0; i < num; i++) {
        fn();
      }
    }
  };
}

const printHello = () => console.log('Hello');
const repeatHello = repeatFunction(printHello, 3);
repeatHello(); // Hello
