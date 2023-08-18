// const arr = [
//   {
//     balance: 100,
//     name: "Ann",
//     friends: ["Max", "Mary", "Hawk"],
//     skills: ["english B2", "lawyer skills"],
//   },
//   {
//     balance: 150,
//     name: "Oleh",
//     friends: ["Dean", "Ann"],
//     skills: ["programing", "english B1", "dropshipping"],
//   },
//   {
//     balance: 200,
//     name: "Max",
//     friends: ["Max", "Sam", "Jack", "Cas"],
//     skills: ["skate skills", "drawing"],
//   },
// ];

// // завдання1
// const balanceSum = arr.reduce(
//   (totalBalance, balance) => balance.balance + totalBalance,
//   0
// );
// console.log(balanceSum);

// // завдання2
// const friendsName = arr.reduce((friendsName, friend) => {
//   if (friend.friends.includes("Max")) {
//     friendsName.push(friend.name);
//   }
//   return friendsName;
// }, []);

// console.log(friendsName);

// // завдання3
// const sortFriends = arr
//   .sort(
//     (minFriend, maxFriend) =>
//       minFriend.friends.length - maxFriend.friends.length
//   )
//   .map((friendName) => friendName.name);
// console.log(sortFriends);

// // завдання4
// const allSkills = arr.flatMap((nameSkill) => nameSkill.skills);
// const uniSkills = [];

// const werify = allSkills.forEach((skill) => {
//   if (!uniSkills.includes(skill)) {
//     uniSkills.push(skill);
//   }
// });

// const sortSkills = uniSkills.sort();

// console.log(sortSkills);
