const drink = prompt("що ви хотіли б придбати чай,каву,сік?");

switch(drink){
    case "чай":
    console.log("чай коштує 30грн");
    break;

    case "сік":
    console.log("сік коштує 20грн");
    break;

    case "кава":
    console.log("кава коштує 50грн");
    break;

    default:
    console.log("напою немає в наявності");
}

console.log("дякуємо за відвідування нашого магазну");