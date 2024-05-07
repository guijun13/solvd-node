const objectsArray = [
  { name: 'John' },
  { name: 'Jane' },
  { name: 'John' },
  { name: 'John' },
  { name: 'Alice' },
  { name: 'Alice' },
  { name: 'Michael' },
];

const filterUniqueNames = (array, callback) => {
  const names = array.map((obj) => obj.name);
  const uniqueNames = names.filter((name, index) => {
    return names.indexOf(name) === index && callback(name, index, names);
  });
  return array.filter((obj) => uniqueNames.includes(obj.name));
};

const uniqueObjects = filterUniqueNames(objectsArray, (name, index, names) => {
  return names.indexOf(name) === names.lastIndexOf(name);
});

console.log(uniqueObjects);
