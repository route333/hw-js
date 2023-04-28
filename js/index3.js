//  завдання 3
const x1 = 10;
const x2 = 30;
const number = 45; 

if (number < x1){
    const message = alert("до відрізка");
} else if (number > x1){
    const message = alert("після відрізка");
} else if (number >= x1 || number <= x2) {
    const message = alert("всередині відрізка");
} else if (number <= x1 || number >= x2){
    const message = alert("до х1,після х2");
}

console.log(number);