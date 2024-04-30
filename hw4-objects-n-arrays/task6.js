const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  address: {},
};

function deepCloneObject(object) {
  return structuredClone(object);
}

console.log(person);
console.log(deepCloneObject(person));
