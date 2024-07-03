// // forEach
// let arr = ["Mike", "Tom", "Jane"];

// arr.forEach((name, index) => {
//     console.log(`${index+1}. ${name}`)
// })

// // find

// let arr = [1, 2, 3, 4, 5];
// const result = arr.find((item) => {
//   return item % 2 === 0;
// });

// console.log(result);

// find

// let userList = [
//   { name: "Mike", age: 30 },
//   { name: "Jane", age: 27 },
//   { name: "Tom", age: 15 },
// ];
// const result = userList.find((user) => {
//   if (user.age < 19) {
//     return true;
//   }
//   return false;
// });

// console.log(result);

//findIndex

// let userList = [
//   { name: "Mike", age: 30 },
//   { name: "Jane", age: 27 },
//   { name: "Tom", age: 15 },
// ];
// const result = userList.findIndex((user) => {
//   if (user.age < 19) {
//     return true;
//   }
//   return false;
// });

// console.log(result);

//filter

// let arr = [1, 2, 3, 4, 5, 6];
// const result = arr.filter((item) => {
//   return item % 2 === 0;
// });

// console.log(result);

//reverse
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

//map()
// let userList = [
//   { name: "Mike", age: 30 },
//   { name: "Jane", age: 27 },
//   { name: "Tom", age: 15 },
// ];

// let newUserList = userList.map((user, index) => {
//   return Object.assign({}, user, {
//     id: index + 1,
//     isAdult: user.age > 19,
//   });
// });

// console.log(newUserList);
// console.log(userList);

//join
// let arr = ["Hello", "my", "name", "is", "hyojoo"];
// let result = arr.join("_");
// console.log(result); // Hello,my,name,is,hyojoo

// split
// const users = "Mike, Jamem, Tom, Tony";
// const result = users.split(",");
// console.log(result); // ['Mike', ' Jamem', ' Tom', ' Tony']

// const str = "Hello my name is hyojoo";
// const result2 = str.split("");
// console.log(result2); // ['H', 'e', 'l', 'l', 'o', ' ', 'm', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'h', 'y', 'o', 'j', 'o', 'o']

// Array.isArray()

let user = {
  name: "Mike",
  age: 30,
};

let userList = ["Mike", "Tom", "Jane"];

console.log(typeof user); // object
console.log(typeof userList); //object

console.log(Array.isArray(user)); // false
console.log(Array.isArray(userList)); // true
