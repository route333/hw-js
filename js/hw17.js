// завдання 1
// const person = {
//   name: "Nelli",
//   surname: "Laroy",
//   age: 25,
// };

// const personInfo = function (person) {
//   const { name: personName, surname, age } = person;
//   return `Мене звати ${personName} ${surname} і мені ${age} років`;
// };

// console.log(personInfo(person));

// завдання 2

// const student = {
//     name: "Burce",
//     surmane: "Lee",
//     grades: [4, 5, 3]
// };

// const calculateAverageGrande = function(student) {
//     const {name: studentName, surmane: studentSurname, grades: [grade1, grade2, grade3]} = student;
//     return (grade1 + grade2 + grade3) / 3;
//     }

// console.log(calculateAverageGrande(student));

// завдання 3

// const person = {
//     name: "John",
//     emails: ["john@gmail.com", "john@example.com", "john123@yahoo.com"],
// };

// const getFristEmail = function(person){
//     const {name: personName, emails: [email1, email2, email3]} = person;
//     return email1;
// }

// console.log(getFristEmail(person));

// завдання 4

// const data = {
//   users: [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 17 },
//     { name: "Bob", age: 30 },
//     { name: "Alice", age: 20 },
//   ],
// };

// const getAdultUsers = function (data) {
//   const {
//     users: [john,  jane, bob , alice],
//   } = data;
//   const adultUsers =  [john, jane, bob, alice].filter(({ age }) => age >= 18);
//   return adultUsers
// };

// console.log(getAdultUsers(data));

// завдання 5

// const musicLibrary = {
//   count: 2,
//   artists: [
//     {
//       name: "The Beatles",
//       albums: [
//         {
//           title: "Sgt. Pepper`s Lonely Hearts Club Band",
//           year: 1967,
//           tracks: [
//             { title: "With a Little Help From My Friends", duration: "2:44" },

//             { title: "Lucy in the Sky with Diamonds", duration: "3:28" },

//             { title: "A Day in the Life", duration: "5:33" },
//           ],
//         },
//         {
//           title: "Abbey Road",
//           year: 1969,
//           tracks: [
//             { title: "Come Together", duration: "4:19" },

//             { title: "Something", duration: "3:01" },

//             { title: "Here Comes The Sun", duration: "3:06" },
//           ],
//         },
//         {
//           title: "The Wall",
//           year: 1979,
//           tracks: [
//             { title: "Another Brick in the Wall, Part 2", duration: "3:59" },

//             { title: "Comfortably Numb", duration: "6:23" },

//             { title: "Hey You", duration: "4:40" },
//           ],
//         },
//         {
//           title: "Dark Side of the Moon",
//           year: 1973,
//           tracks: [
//             { title: "Speak to Me/Breathe", duration: "3:58" },

//             { title: "Time", duration: "7:06" },

//             { title: "Money", duration: "6:22" },
//           ],
//         },
//       ],
//     },
//   ],
// };

// const {
//   name,
//   albums: [
//     {
//       title1,
//       year1,
//       tracks1: [
//         {track1Title1, track1Duration1},
//         {track1Title2, track1Duration2},
//         {track1Title3, track1Duration3},
//       ],
//     },
//     {
//       title2,
//       year2,
//       tracks2: [
//         {track2Title1, track2Duration1},
//         {track2Title2, track2Duration2},
//         {track2Title3, track2Duration3},
//       ],
//     },
//     {
//       title3,
//       year3,
//       tracks3: [
//         {track3Title1, track3Duration1},
//         {track3Title2, track3Duration2},
//         {track3Title3, track3Duration3},
//       ],
//     },
//     {
//       title4,
//       year4,
//       tracks4: [
//         {track4Title1, track4Duration1},
//         {track4Title2, track4Duration2},
//         {track4Title3, track4Duration3},
//       ],
//     },
//   ],
// } = musicLibrary;
