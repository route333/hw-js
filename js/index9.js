const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const meSsage = alert(`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`);
console.log(meSsage);