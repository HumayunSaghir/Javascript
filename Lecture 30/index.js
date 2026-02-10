// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = nums.filter((element) => {
//     if(element % 2 == 0){
//         return element
//     }
// })

// console.log(newNums)

// let newNums = []

// nums.forEach((element) => {
//     if(element % 2 === 0){
//         newNums.push(element)
//     }
// })

// console.log(newNums)

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.filter((element) => {
//     return (element + 3)
// })

// console.log(newNums)

// const data = [
//   {
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     publisher: "Prentice Hall",
//     price: 3200,
//     isbn: "978-0132350884",
//   },
//   {
//     title: "The Pragmatic Programmer",
//     author: "Andrew Hunt",
//     publisher: "Addison-Wesley",
//     price: 3500,
//     isbn: "978-0201616224",
//   },
//   {
//     title: "Design Patterns",
//     author: "Erich Gamma",
//     publisher: "Addison-Wesley",
//     price: 4200,
//     isbn: "978-0201633610",
//   },
//   {
//     title: "You Don't Know JS",
//     author: "Kyle Simpson",
//     publisher: "O'Reilly Media",
//     price: 2800,
//     isbn: "978-1491904244",
//   },
//   {
//     title: "Introduction to Algorithms",
//     author: "Thomas H. Cormen",
//     publisher: "MIT Press",
//     price: 6500,
//     isbn: "978-0262033848",
//   },

//   {
//     title: "Refactoring",
//     author: "Martin Fowler",
//     publisher: "Addison-Wesley",
//     price: 4800,
//     isbn: "978-0134757599",
//   },
//   {
//     title: "Cracking the Coding Interview",
//     author: "Gayle Laakmann McDowell",
//     publisher: "CareerCup",
//     price: 4000,
//     isbn: "978-0984782857",
//   },
//   {
//     title: "Head First Design Patterns",
//     author: "Eric Freeman",
//     publisher: "O'Reilly Media",
//     price: 3600,
//     isbn: "978-0596007126",
//   },
//   {
//     title: "Effective Java",
//     author: "Joshua Bloch",
//     publisher: "Addison-Wesley",
//     price: 4500,
//     isbn: "978-0134685991",
//   },
//   {
//     title: "Code Complete",
//     author: "Steve McConnell",
//     publisher: "Microsoft Press",
//     price: 3900,
//     isbn: "978-0735619678",
//   },

//   {
//     title: "The Mythical Man-Month",
//     author: "Frederick P. Brooks Jr.",
//     publisher: "Addison-Wesley",
//     price: 2700,
//     isbn: "978-0201835953",
//   },
//   {
//     title: "Working Effectively with Legacy Code",
//     author: "Michael Feathers",
//     publisher: "Prentice Hall",
//     price: 4100,
//     isbn: "978-0131177055",
//   },
//   {
//     title: "Clean Architecture",
//     author: "Robert C. Martin",
//     publisher: "Prentice Hall",
//     price: 3400,
//     isbn: "978-0134494166",
//   },
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     publisher: "O'Reilly Media",
//     price: 2300,
//     isbn: "978-0596517748",
//   },
//   {
//     title: "Algorithms",
//     author: "Robert Sedgewick",
//     publisher: "Addison-Wesley",
//     price: 5000,
//     isbn: "978-0321573513",
//   },

//   {
//     title: "Deep Learning",
//     author: "Ian Goodfellow",
//     publisher: "MIT Press",
//     price: 7200,
//     isbn: "978-0262035613",
//   },
//   {
//     title: "Computer Networking: A Top-Down Approach",
//     author: "James F. Kurose",
//     publisher: "Pearson",
//     price: 5600,
//     isbn: "978-0133594140",
//   },
//   {
//     title: "Operating System Concepts",
//     author: "Abraham Silberschatz",
//     publisher: "Wiley",
//     price: 6000,
//     isbn: "978-1119456339",
//   },
//   {
//     title: "Database System Concepts",
//     author: "Abraham Silberschatz",
//     publisher: "McGraw-Hill",
//     price: 5800,
//     isbn: "978-0078022159",
//   },
//   {
//     title: "Artificial Intelligence: A Modern Approach",
//     author: "Stuart Russell",
//     publisher: "Pearson",
//     price: 7000,
//     isbn: "978-0134610993",
//   },
// ];

// const expensiveBooks = data.filter((book) => {
//     if(book.price >= 5000){
//         return book
//     }
// })

// console.log(expensiveBooks.length)

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const incNums = nums.map((element) => {
//     return (element + 1)
// })

// console.log(incNums)

// This is method chaining
// const newNums = nums.map((element) => element + 2)
//                 .map((element) => element + 101)
//                 .filter((element) => element % 2 === 0)

// console.log(newNums)

const data = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    publisher: "Prentice Hall",
    price: 3200,
    isbn: "978-0132350884",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    publisher: "Addison-Wesley",
    price: 3500,
    isbn: "978-0201616224",
  },
  {
    title: "Design Patterns",
    author: "Erich Gamma",
    publisher: "Addison-Wesley",
    price: 4200,
    isbn: "978-0201633610",
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publisher: "O'Reilly Media",
    price: 2800,
    isbn: "978-1491904244",
  },
  {
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    publisher: "MIT Press",
    price: 6500,
    isbn: "978-0262033848",
  },

  {
    title: "Refactoring",
    author: "Martin Fowler",
    publisher: "Addison-Wesley",
    price: 4800,
    isbn: "978-0134757599",
  },
  {
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    publisher: "CareerCup",
    price: 4000,
    isbn: "978-0984782857",
  },
  {
    title: "Head First Design Patterns",
    author: "Eric Freeman",
    publisher: "O'Reilly Media",
    price: 3600,
    isbn: "978-0596007126",
  },
  {
    title: "Effective Java",
    author: "Joshua Bloch",
    publisher: "Addison-Wesley",
    price: 4500,
    isbn: "978-0134685991",
  },
  {
    title: "Code Complete",
    author: "Steve McConnell",
    publisher: "Microsoft Press",
    price: 3900,
    isbn: "978-0735619678",
  },

  {
    title: "The Mythical Man-Month",
    author: "Frederick P. Brooks Jr.",
    publisher: "Addison-Wesley",
    price: 2700,
    isbn: "978-0201835953",
  },
  {
    title: "Working Effectively with Legacy Code",
    author: "Michael Feathers",
    publisher: "Prentice Hall",
    price: 4100,
    isbn: "978-0131177055",
  },
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    publisher: "Prentice Hall",
    price: 3400,
    isbn: "978-0134494166",
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    publisher: "O'Reilly Media",
    price: 2300,
    isbn: "978-0596517748",
  },
  {
    title: "Algorithms",
    author: "Robert Sedgewick",
    publisher: "Addison-Wesley",
    price: 5000,
    isbn: "978-0321573513",
  },

  {
    title: "Deep Learning",
    author: "Ian Goodfellow",
    publisher: "MIT Press",
    price: 7200,
    isbn: "978-0262035613",
  },
  {
    title: "Computer Networking: A Top-Down Approach",
    author: "James F. Kurose",
    publisher: "Pearson",
    price: 5600,
    isbn: "978-0133594140",
  },
  {
    title: "Operating System Concepts",
    author: "Abraham Silberschatz",
    publisher: "Wiley",
    price: 6000,
    isbn: "978-1119456339",
  },
  {
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    publisher: "McGraw-Hill",
    price: 5800,
    isbn: "978-0078022159",
  },
  {
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell",
    publisher: "Pearson",
    price: 7000,
    isbn: "978-0134610993",
  },
];


let initialValue = 0

const total = data.reduce((acc, curr) => {
    return (acc + curr.price)
}, initialValue)

console.log(total)