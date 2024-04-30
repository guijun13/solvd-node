// Guilherme Jun Yazaki Grillo
// gjungrillo.laba@solvd.com

class StringNumber {
  constructor(value) {
    this.value = value;
  }

  addString(num) {
    const len1 = this.value.length;
    const len2 = num.length;
    const maxLen = Math.max(len1, len2);
    const result = [];
    let carry = 0;

    for (let i = 0; i < maxLen; i++) {
      const digit1 = i < len1 ? parseInt(this.value.charAt(len1 - 1 - i)) : 0;
      const digit2 = i < len2 ? parseInt(num.charAt(len2 - 1 - i)) : 0;
      const sum = digit1 + digit2 + carry;
      result.unshift(sum % 10);
      carry = Math.floor(sum / 10);
    }

    if (carry > 0) {
      result.unshift(carry);
    }

    return result.join('');
  }

  subtractString(num) {
    const len1 = this.value.length;
    const len2 = num.length;
    const maxLen = Math.max(len1, len2);
    const result = [];
    let borrow = 0;

    for (let i = 0; i < maxLen; i++) {
      const digit1 = i < len1 ? parseInt(this.value.charAt(len1 - 1 - i)) : 0;
      const digit2 = i < len2 ? parseInt(num.charAt(len2 - 1 - i)) : 0;
      let diff = digit1 - digit2 - borrow;
      if (diff < 0) {
        diff += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }
      result.unshift(diff);
    }

    // Remove leading zeros
    while (result.length > 1 && result[0] === 0) {
      result.shift();
    }

    return result.join('');
  }

  divideString(divisor) {
    const quotient = Math.floor(parseInt(this.value) / parseInt(divisor));
    return quotient.toString();
  }

  multiplyString(num) {
    const len1 = this.value.length;
    const len2 = num.length;
    const result = new Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
      for (let j = len2 - 1; j >= 0; j--) {
        const product = parseInt(this.value[i]) * parseInt(num[j]);
        const sum = product + result[i + j + 1];
        result[i + j + 1] = sum % 10;
        result[i + j] += Math.floor(sum / 10);
      }
    }

    // Remove leading zeros
    while (result.length > 1 && result[0] === 0) {
      result.shift();
    }

    return result.join('');
  }
}

const number = new StringNumber('123');
console.log(`Addition: ${number.addString('2')}`); // Output: "125"
console.log(`Subtration: ${number.subtractString('23')}`); // Output: "100"
console.log(`Division: ${number.divideString('3')}`); // Output: "41"
console.log(`Multiplication: ${number.multiplyString('10')}`); // Output: "1230"
