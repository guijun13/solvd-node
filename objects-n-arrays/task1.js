'use strict';

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  updateInfo: function (newData) {
    this.firstName = newData.firstName;
    this.age = newData.age;
  },
  address: {},
};

person.updateInfo({ firstName: 'Jane', age: 32 });

Object.defineProperties(person, {
  firstName: { writable: false },
  lastName: { writable: false },
  age: { writable: false },
  email: { writable: false },
  address: { configurable: false, enumerable: false },
});
// person.firstName = 'Pedrin'; // not possible

// person.updateInfo({ firstName: 'Josh', age: 23 }); // will not work

console.log(person);
