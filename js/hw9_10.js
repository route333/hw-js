// завдання 1

// пункт 1
const num1 = [1, 2, 3];
num1.push(4, 5, 6);
console.log(num1);
// пункт 2
const num2 = [1, 2, 3];
num2.splice(0, 0, 4, 5, 6);
console.log(num2);
// пункт 3
const strng1 = ['js', 'css', 'jq'];
console.log(strng1[0]);
// пункт 4
const strng2 = ['js', 'css', 'jq'];
console.log(strng2[2]);
// пункт 5
const num3 = [1, 2, 3, 4, 5];
console.log(num3.slice(0,-2));
// пункт 6
const num4 = [1, 2, 3, 4, 5];
console.log(num4.slice(-2));

// завдання 2
// пункт 1
const fruits = ["apple", "kiwi", "mango"];
fruits.pop();
fruits.shift();
fruits.push("papaja");
fruits.unshift("pomelo");
console.table(fruits);
// пункт 2
fruits.splice(2, 1);
fruits.splice(2, 0, "kumkwat", "watermelon");
console.log(fruits);
// пункт 3
alert(`у корзині такі фрукти як: ${fruits}`);

// завдання 3
const styles = ["Джаз", "Блюз"];
let shft;
styles.push("Рок-н-ролл");
styles.splice(1, 1, "Класика");
shft = styles.shift();
console.log(shft);
styles.unshift("Реп", "Реггі");
console.log(styles);