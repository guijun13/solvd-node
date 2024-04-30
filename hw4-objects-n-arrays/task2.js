'use strict';

const product = {
  id: 1,
  name: 'Laptop',
  price: 1000,
  quantity: 5,
  color: 'red',
};

Object.defineProperties(product, {
  id: { configurable: false },
  price: { writable: false, enumerable: false },
  quantity: { writable: false, enumerable: false },
});

function getTotalPrice(product) {
  const price = Object.getOwnPropertyDescriptor(product, 'price').value;
  const quantity = Object.getOwnPropertyDescriptor(product, 'quantity').value;

  return price * quantity;
}

console.log(getTotalPrice(product));

function deleteNonConfigurable(object, propertyName) {
  if (
    propertyName in object &&
    !Object.getOwnPropertyDescriptor(object, propertyName).configurable
  ) {
    throw new Error('Cannot delete non-configurable property');
  } else {
    delete object[propertyName];
  }
}

deleteNonConfigurable(product, 'color'); // remove color property from object
deleteNonConfigurable(product, 'quantity'); //
console.log(product);
deleteNonConfigurable(product, 'id'); // throw error
