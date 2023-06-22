// // завдання 1

// function makePizza() {

//     return "Your pizza is being prepared, please wait.";

//   }

// // Change code below this line

// const result = makePizza();

// const pointer = makePizza;
// console.log(result);
// console.log(pointer());

// стрілочна:

// const makePizza = () => "Your pizza is being prepared, please wait.";

// завдання 2

// function deliverPizza(pizzaName) {

//     return `Delivering ${pizzaName} pizza.`;

//   }

// function makePizza(pizzaName) {

//     return `Pizza ${pizzaName} is being prepared, please wait...`;

//   }

//   // Chande code below this line

//   function makeMessage(pizzaName, callback) {

//     return callback(pizzaName);

//   }

//   console.log(makeMessage("peperoni", makePizza));
//   console.log(makeMessage("peperoni", deliverPizza));

// стрілочна:

// const deliverPizza = pizzaName => `Delivering ${pizzaName} pizza.`;

// const makePizza = pizzaName => `Pizza ${pizzaName} is being prepared, please wait...`;

// const makeMessage = (pizzaName, callback) => callback(pizzaName);

// console.log(makeMessage("peperoni", makePizza));
// console.log(makeMessage("peperoni", deliverPizza));

// завдання 3

// function makePizza(pizzaName, callback) {

//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);

//     callback(pizzaName);

//   }

//   makePizza("Royal Grand", function deliverPizza(pizzaName) {

//     console.log(`Delivering pizza ${pizzaName}.`);

//   });

//   // Change code below this line

//   makePizza("Ultracheese", function eatPizza(pizzaName){
//     console.log(`Eating pizza ${pizzaName}`);
//   });

// стрілочна:

// const makePizza = (pizzaName, callback) => {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   };

//   makePizza("Royal Grand", (pizzaName) => {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });

//   makePizza("Ultracheese", (pizzaName) => {
//     console.log(`Eating pizza ${pizzaName}`);
//   });

// завдання 4

// const btnref = document.querySelector("[data-btn]");

// function showInfo() {
//   console.log("Hello World!");
// }

// btnref.addEventListener("click", showInfo);

// стрілочна:

//   const btnref = document.querySelector("[data-btn]");

//   const showInfo = () => console.log("Hello World!");

//   btnref.addEventListener("click", showInfo);

// // завдання 5

// const buttonref = document.querySelector("[data-button]");
// let click = 0;

// function buttonClickNum() {
//   click += 1;
//   console.log(click);
// }

// buttonref.addEventListener("click", buttonClickNum);

// стрілочна:

// const buttonref = document.querySelector("[data-button]");
// let click = 0;

// const buttonClickNum = () => {
//   click += 1;
//   console.log(click);
// }

// buttonref.addEventListener("click", buttonClickNum);

// завдання 6
// const applyCallbackToEachElement = function (arr, callback) {
//     return callback(arr);
// }

// const squareCallback = function(arr){
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * arr[i];
//      }
//      return arr;
// };

// const arr = [1, 2, 3, 4, 5];

// const result = applyCallbackToEachElement(arr, squareCallback);

// console.log(result); // [1, 4, 9, 16, 25]

// стрілочна:

// const applyCallbackToEachElement = (arr, callback) => callback(arr);

// const squareCallback = arr => {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * arr[i];
//      }
//      return arr;
// };

// const arr = [1, 2, 3, 4, 5];

// const result = applyCallbackToEachElement(arr, squareCallback);

// console.log(result); // [1, 4, 9, 16, 25]

// завдання 7

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//     return login.length >= 4 && login.length <= 16;
// };

// const isLoginUnique = function (allLogins, login) {
//     return !allLogins.includes(login);
// };

// const addLogin = function (allLogins, login) {
//     if(!isLoginValid(login)){
//         return ("Помилка! Логін повинен бути від 4 до 16 символів");
//     }

//     if(!isLoginUnique(allLogins, login)){
//         return ("Такий логін вже використовується!")
//     }

//     allLogins.push(login);
//     return ("Логін успішно доданий!")
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
// console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'

// стрілочна:

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = (login) => login.length >= 4 && login.length <= 16;

// const isLoginUnique = (allLogins, login) => !allLogins.includes(login);

// const addLogin = (allLogins, login) => {
//   if (!isLoginValid(login)) {
//     return "Помилка! Логін повинен бути від 4 до 16 символів";
//   }

//   if (!isLoginUnique(allLogins, login)) {
//     return "Такий логін вже використовується!";
//   }

//   allLogins.push(login);
//   return "Логін успішно доданий!";
// };

// console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
// console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'


// завдання з відео:
// завдання 1

// Коля

// завдання 2
// так

// showMessage(); 
// function showMessage() {
//     console.log("message");
// }

// завдання 3
// ні,правильно буде так

// let showMessage = function (){
//     console.log("message");
// }

// showMessage();

// завдання 4
// треба перемістити showMessage(); в область видимості
// `use strict`
// if(2 > 1){
//     function showMessage(){
//         console.log(`message`);
//     }
//     showMessage();
// }