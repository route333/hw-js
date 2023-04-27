// завдання 5
const free = "free";
const pro = "pro";
const vip = "vip";
const message = 0;
 
if (free === pro && vip){
    const message = alert("вас допущено до контенту");
} else {
    const message = alert(`вас не допущено до контенту,купіть підписку ${pro} або ${vip}`);
}
console.log(message);