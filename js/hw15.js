// завдання 1
// const user = {
//     hobby: "aaa",
//     premium: true,
// }
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// for(const i of Object.keys(user)){
//     console.log(`${i}: ${user[user]}`)
// }
// завдання 2
// const countProps = obj => Object.keys(obj).length;

// console.log(countProps(user));
// завдання 3
// const employees = {
//     diana: 5,
//     max: 15,
//     oleh: 10,
// }

// const findBestEmployee = function (employees) {
//     let bestEmployee = 0;
//     let bestEmployer = "";
//     const arrEmployees = Object.keys(employees);
//    for(const employe of arrEmployees){
//     if(bestEmployee < employees[employe]){
//         bestEmployee = employees[employe];
//         bestEmployer = employe
//     }
// }
//     return `${bestEmployer}: ${bestEmployee}`;
// };

// console.log(findBestEmployee(employees));

// завдання 4

// function countTotalSalary(employees){
//     let totalSalary = 0

//     for(const employee in employees){
//         totalSalary += employees[employee]
//     }
//     return totalSalary;
// }
// const workers = {
//     Max: 1000,
//     Diana: 1500,
//     Petro: 1200,
//     Sviatoslaw: 2000
//   };

//   console.log(countTotalSalary(workers));

// завдання 5
// function getAllPropValues(arr, prop) {
//   const propValues = [];
//   for (const obj of arr) {
//     if ( prop) {
//       propValues.push(obj[prop]);
//     }
//   }
//   return propValues;
// }

// const products = [
//   { name: "Apple", price: 10 },
//   { name: "Apple", price: 13 },
//   { name: "Apple", price: 10 },
//   { name: "Apple", price: 10 },
// ];

// console.log(getAllPropValues(products, `price`));

// завдання 6

// function calculateTotalPrice(allProdcuts, productName){
//     let totalPrice = 0;
//     for(const product of allProdcuts){
//         if(product.name === productName){
//             totalPrice = product.price * product.quantity;
//         }
//     }
//     return totalPrice;
// }

// const products = [
//     { name: 'milk', price: 30, quantity: 10 },
//     { name: 'yogurt', price: 20, quantity: 5 },
//     { name: 'chips', price: 50, quantity: 8 },
//     { name: 'cola', price: 20, quantity: 3 }
//   ];

// console.log(calculateTotalPrice(products, 'chips'));