export function addValues(value1, value2) {
  if (typeof value1 !== typeof value2) {
    throw new Error('Values must be of the same type');
  }
  if (
    (typeof value1 === 'number' && typeof value2 === 'number') ||
    (typeof value1 === 'string' && typeof value2 === 'string')
  ) {
    return value1 + value2;
  }
  if (typeof value1 === 'boolean' && typeof value2 === 'boolean') {
    return value1 || value2;
  }
}

export function stringifyValue(value) {
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value);
}

export function invertBoolean(value) {
  if (typeof value !== 'boolean') {
    throw new Error('Value must be a boolean');
  }
  return !value;
}

export function convertToNumber(value) {
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

export function coerceToType(value, type) {
  switch (type) {
    case 'string':
      return stringifyValue(value);
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
