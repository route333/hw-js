// завдання 3
const styles = ["Джаз", "Блюз"];
let shft;
styles.push("Рок-н-ролл");
styles.splice(1, 1, "Класика");
shft = styles.shift();
console.log(shft);
styles.unshift("Реп", "Реггі");
console.log(styles);