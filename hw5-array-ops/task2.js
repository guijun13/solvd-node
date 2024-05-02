function chunkArray(array, chunkSize) {
  return Array.from({ length: Math.ceil(array.length / chunkSize) }, (v, i) =>
    array.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
}

console.log(chunkArray([1, 2, 3, 4, 5, 5], 2));
