let num;

do{
    num = prompt("введіть число більше 100");
} while(num <= 100 && num !== null);
if (num !== null){
    console.log(`ви ввели число ${num}`);
} else{
    console.log(`введеня числа відмінено`);
}