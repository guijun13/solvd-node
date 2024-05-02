const objectsArray = [
  { name: 'John' },
  { name: 'Jane' },
  { name: 'John' },
  { name: 'John' },
  { name: 'Alice' },
  { name: 'Alice' },
  { name: 'Michael' },
];

function customFilterUnique(array, callback) {
  const uniqueValues = [];
  const uniqueObjects = [];

  array.forEach((item) => {
    const value = callback(item);

    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
      uniqueObjects.push(item);
    }
  });

  return uniqueObjects;
}

const filterCallback = (obj) => obj.name;

console.log(customFilterUnique(objectsArray, filterCallback));
