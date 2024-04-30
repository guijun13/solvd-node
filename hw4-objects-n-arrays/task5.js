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

function observeObject(object, callback) {
  return new Proxy(object, {
    get(target, property) {
      callback(property, 'get');
      return target[property];
    },
    set(target, property, value) {
      callback(property, 'set');
      target[property] = value;
      return true;
    },
  });
}

const personProxy = observeObject(person, (property, action) => {
  console.log(`Property ${property} was ${action} on the object.`);
});

personProxy.firstName; // Logs: Property firstName was get on the object.
personProxy.age = 35; // Logs: Property age was set on the object.

console.log(personProxy);
