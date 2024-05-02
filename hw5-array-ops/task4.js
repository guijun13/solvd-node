function getArrayIntersection(firstArray, secondArray) {
  const intersectionElements = firstArray.filter((value) => secondArray.includes(value));
  return intersectionElements;
}

function getArrayUnion(firstArray, secondArray) {
  const uniqueElements = firstArray.filter((value) => !secondArray.includes(value));
  return uniqueElements;
}

console.log(getArrayIntersection([1, 2, 3, 4, 5, 6, 7], [1, 6, 7]));
console.log(getArrayUnion([1, 2, 3, 4, 5, 6, 7], [1, 6, 7]));
