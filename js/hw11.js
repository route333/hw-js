// завдання 1

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     const ind = i + 1;
//     console.log(`${ind} - ${array[i]}`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// завдання 2

// const calculateEngravingPrice = function (message, pricePerWord) {
//   const price = message.split(" ").length * pricePerWord;
//   return price;
// };

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// завдання 3

// const findLongestWord = function (string) {
//     const words = string.split(" ");
//     let longest = words[0];
    
//     for(let i = 0; i < words.length; i++){
//         const smaller = words[i];
//         if(smaller.length > longest.length){
//             longest = smaller;
//         }
//     }
//     return longest;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'


// завдання 4

// const formatString = function (string) {
//     if(string.length < 40){
//         return string;
//    }else{
//         const strng = string.slice(0, 40) + "...";
//         return strng;
//    }
//   };
  
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // повернеться оригінальний рядок
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   // повернеться форматований рядок
  
//   console.log(formatString('Curabitur ligula sapien.'));
//   // повернеться оригінальний рядок
  
//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );
//   // повернеться форматований рядок


// завдання 5

// const checkForSpam = function (message) {
//     return message.includes("sale","spam");
//   };
  
//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(checkForSpam('Latest technology news')); // false
  
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
//   console.log(checkForSpam('Get best sale offers now!')); // true
  
//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// завдання 6

// let input;
// const numbers = [];
// let total = 0;

// function totalSum() {
//   do {
//     input = prompt('Введіть число');
    
//     if (input === null) {
//       break;
//     }
    
//     input = Number(input);
    
//     if (Number.isNaN(input)) {
//       alert('Було введено не число, спробуйте ще раз.');
//     } else {
//       numbers.push(input);
//     }
//   } while (input !== null);
  
//   if (numbers.length > 0) {
//     for (const number of numbers) {
//       total += number;
//     }
  
//     return (`сума чисел ${total}.`);
//   }
// }

// console.log(totalSum());


// завдання 7

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
    return !allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
    if(!isLoginValid(login)){
        return ("Помилка! Логін повинен бути від 4 до 16 символів");
    }

    if(!isLoginUnique(allLogins, login)){
        return ("Такий логін вже використовується!")
    }

    allLogins.push(login);
    return ("Логін успішно доданий!")
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'