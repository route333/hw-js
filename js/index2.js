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