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
person.age = 25;

function createImmutableObject(object) {
  const properties = Object.getOwnPropertyNames(object);
  properties.map((property) => {
    Object.defineProperty(object, property, { writable: false });
  });

  return newObject;
}

const newObject = { ...person };
createImmutableObject(newObject);

person.firstName = 'Pedrin';
// newObject.firstName = 'Pedrin'; // error because all properties from newObject are read-only
console.log(person);
console.log(newObject);
