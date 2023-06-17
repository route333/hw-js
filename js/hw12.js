// // завдання 1

// function makePizza() {

//     return "Your pizza is being prepared, please wait.";
  
//   }
  
//   // Change code below this line
  
//   const result = makePizza();
  
//   const pointer = makePizza;
//   console.log(result);
//   console.log(pointer());

// завдання 2

// function deliverPizza(pizzaName) {

//     return `Delivering ${pizzaName} pizza.`;

//   }

//   function makePizza(pizzaName) {

//     return `Pizza ${pizzaName} is being prepared, please wait...`;

//   }

//   // Chande code below this line

//   function makeMessage(pizzaName, callback) {

//     return callback(pizzaName);

//   }

//   console.log(makeMessage("peperoni", makePizza));
//   console.log(makeMessage("peperoni", deliverPizza));
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

// завдання 4

// const btnref = document.querySelector("[data-btn]");

// function showInfo() {
//   console.log("Hello World!");
// }

// btnref.addEventListener("click", showInfo);
// // завдання 5

// const buttonref = document.querySelector("[data-button]");
// let click = 0;

// function buttonClickNum() {
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
// завдання 7

const calculateDiscountedPrice = function (price, discount, callback) {
    const discountedPrice = price - (price * discount / 100);
    return callback(discountedPrice);
};

const showDiscountedPrice = function(discountedPrice){
    return `Discounted price: ${discountedPrice}`;
};

console.log(calculateDiscountedPrice(100, 10, showDiscountedPrice)); // Discounted price: 90