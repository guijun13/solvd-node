const studentsList = [
  {
    firstName: 'John',
    lastName: 'Doe',
    grade: 5,
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    grade: 6,
  },
  {
    firstName: 'Emily',
    lastName: 'Jones',
    grade: 7,
  },
  {
    firstName: 'Peter',
    lastName: 'Saints',
    grade: 10,
  },
  {
    firstName: 'James',
    lastName: 'Brown',
    grade: 9,
  },
];

function getFullName(studentsList) {
  return studentsList.map((name) => `${name.firstName} ${name.lastName}`);
}

console.log(getFullName(studentsList)); // ["John Doe", "Jane Smith", "Emily Jones", "Peter Saints", "James Brown"]

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

function toLowerCaseAndSplit(studentList) {
  return studentList.flatMap((student) => student.toLowerCase().split(' '));
}

function filterUnique(words) {
  return words.reduce((uniqueWords, word) => {
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
    return uniqueWords;
  }, []);
}

function sortWords(words) {
  return words.sort();
}

const filterUniqueWords = compose(sortWords, filterUnique, toLowerCaseAndSplit);
console.log(filterUniqueWords(getFullName(studentsList)));

function getAverageGrade(studentsList) {
  const totalGrade = studentsList.reduce((total, student) => {
    return total + student.grade;
  }, 0);

  return totalGrade / studentsList.length;
}

console.log(getAverageGrade(studentsList)); // 7.4
