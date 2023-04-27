const myName = "Oleg".length;
const surname = "Bondarenko".length;
let message;

if (myName >= 4 && surname >= 5){
    const message = alert(myName + surname);
} else{
    const message = alert("ой я не можу виконати умову");
}

console.log(message)