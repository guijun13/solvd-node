function addValues(value1, value2) {
  return value1 + value2;
}

console.log('addValues');
console.log(addValues(1, 2)); // 3
console.log(
  addValues(2938192389213891023819023810293812093, 2938192389213891023819023810293812093)
); // 5.876384778426782e+36
console.log(addValues('1', '2')); // 12
console.log(addValues('1', 2)); // 12
console.log(addValues(true, false)); // 1
console.log(addValues(true, 1)); // 2
console.log(addValues(false, 2)); // 2
console.log(addValues(false, '2')); // 2
console.log(addValues('true', 1)); // true1
console.log(addValues(null, 2)); // 2
console.log(addValues(undefined, 2)); // NaN
console.log(addValues(1, { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' })); // 1[object Object]

function stringifyValue(value) {
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value);
}

console.log(stringifyValue({ firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' })); // {"firstName":"John","lastName":"Doe","age":50,"eyeColor":"blue"}
console.log(stringifyValue(1121212)); // 1121212
console.log(stringifyValue('1121212')); // 1121212
console.log(stringifyValue(false)); // false
console.log(stringifyValue(true)); // true
console.log(stringifyValue(null)); // null

function invertBoolean(value) {
  if (typeof value !== 'boolean') {
    throw new Error('Value must be a boolean');
  }
  return !value;
}
console.log('\ninvertBoolean');
console.log(invertBoolean(true)); // false
console.log(invertBoolean(false)); // true
// console.log(invertBoolean('solvd-laba')); // Error

function convertToNumber(value) {
  if (typeof value === 'number' || typeof value === 'bigint') {
    return Number(value);
  }
  if (typeof value === 'string') {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error('Value cannot be converted to a number');
    }
    return parsedValue;
  }
  throw new Error('Value cannot be converted to a number');
}

console.log('\nconvertToNumber');
console.log(convertToNumber('1121212')); // 1121212
console.log(convertToNumber(1121212)); // 1121212
console.log(convertToNumber(2938192389213891023819023810293812093)); // 2.938192389213891e+36
// console.log(convertToNumber(false)); // Error
// console.log(convertToNumber({ firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' })); // Error

function coerceToType(value, type) {
  switch (type) {
    case 'string':
      return String(value);
    case 'number':
      return convertToNumber(value);
    case 'bigint':
      return BigInt(value);
    case 'boolean':
      return Boolean(value);
    case 'object':
      return JSON.parse(value);
    case 'symbol':
      return Symbol(value);
    case 'undefined':
      return undefined;
    case 'null':
      return null;
    default:
      throw new Error('Invalid type');
  }
}

console.log('\ncoerceToType');
console.log(coerceToType('1121212', 'string')); // 1121212
console.log(coerceToType(1121212, 'number')); // 1121212
console.log(coerceToType(1121212, 'bigint')); // 1121212n
console.log(coerceToType('true', 'boolean')); // true
console.log(
  coerceToType('{"firstName":"John","lastName":"Doe","age":50,"eyeColor":"blue"}', 'object')
); // { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
console.log(coerceToType('true', 'symbol')); // Symbol(true)
console.log(coerceToType('true', 'undefined')); // undefined
console.log(coerceToType('true', 'null')); // null
// console.log(coerceToType('true', 'undefined')); // Error
// console.log(coerceToType('true', 'null')); // Error
