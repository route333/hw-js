// завдання 6
const num = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let maxNum = num[0];
for(let i = 0; i < num.length; i++){
  if(num[i] > maxNum){
    maxNum = num[i];
  }
}
console.log(maxNum);