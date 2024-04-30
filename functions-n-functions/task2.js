const studentsList = [
  {
    firstName: 'John',
    lastName: 'Doe',
    grade: 5,
    favoriteQuote: 'To be or not to be',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    grade: 6,
    favoriteQuote: 'The only way to do great work is to love what you do.',
  },
  {
    firstName: 'Emily',
    lastName: 'Jones',
    grade: 7,
    favoriteQuote: 'The only thing we have to fear is fear itself.',
  },
  {
    firstName: 'Peter',
    lastName: 'Saints',
    grade: 10,
    favoriteQuote: 'I have a dream',
  },
  {
    firstName: 'James',
    lastName: 'Brown',
    grade: 9,
    favoriteQuote:
      'Ask not what your country can do for you – ask what you can do for your country.',
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
  return studentList.flatMap((student) => student.favoriteQuote.toLowerCase().split(' '));
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
console.log(filterUniqueWords(studentsList));

function getAverageGrade(studentsList) {
  const totalGrade = studentsList.reduce((total, student) => {
    return total + student.grade;
  }, 0);

  return totalGrade / studentsList.length;
}

console.log(getAverageGrade(studentsList)); // 7.4
