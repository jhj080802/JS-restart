// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// arr1 = [...arr2, ...arr1];

// console.log(arr1);

let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user = {
  ...user,
  ...info,
  skolls: [...fe, ...lang],
};

console.log(user);
