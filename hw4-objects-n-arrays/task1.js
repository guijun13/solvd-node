'use strict';

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  updateInfo: function (newData) {
    for (let key in newData) {
      if (this.hasOwnProperty(key) && Object.getOwnPropertyDescriptor(this, key).writable) {
        this[key] = newData[key];
      }
    }
  },
  address: {},
};

Object.defineProperties(person, {
  firstName: { writable: false },
  lastName: { writable: false },
  age: { writable: false },
  email: { writable: false },
  address: { configurable: false, enumerable: false },
});
// person.firstName = 'James'; // not possible

person.updateInfo({
  firstName: 'Jane',
  lastName: 'Smith',
  age: 32,
  email: 'janesmith123@gmail.com',
});

console.log(person);
