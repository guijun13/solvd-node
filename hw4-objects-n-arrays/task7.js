const iceCreamSchema = {
  type: 'object',
  properties: {
    flavour: { type: 'string' },
    price: { type: 'number' },
    stock: { type: 'number' },
  },
  required: ['flavour', 'price', 'stock'],
};

const iceCreamData = {
  flavour: 'Pistachio',
  price: 1.99,
  stock: null,
};

function validateObject(object, validationSchema) {
  for (const property in validationSchema.properties) {
    if (validationSchema.required.includes(property)) {
      if (!object.hasOwnProperty(property)) {
        return false;
      }
    }
    if (typeof object[property] !== validationSchema.properties[property].type) {
      return false;
    }
  }
  return true;
}

console.log(validateObject(iceCreamData, iceCreamSchema));
