const goods = 10;
let totalPrice = 0;

for(let i = 0; i <= goods; i += 1){
    let price = Math.floor(Math.random() * 4501) + 500;
    totalPrice = totalPrice + price;
}

console.log(`сумма замовлення ${totalPrice}`);