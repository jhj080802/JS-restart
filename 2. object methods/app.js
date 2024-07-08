// let n = "nema";
// let a = "age";

// const user = {
//     [n]: "mike",
//     [a]: 30,
//     [1 + 4]: 5,
// };

// console.log(user);

// function makeOBJ(key, val) {
//     return {
//         [key]: val,
//     };
// }

// const obj = makeOBJ("나이", 33);

// console.log(obj);

// const user = {
//     name: "mike",
//     age: 30,
// };

// const user2 = user;
// user2.name = "Tom";

// console.log(user);
// console.log(user2);

const user = {
  name: "mike",
  age: 30,
};

//{}: 초기 값 (빈값)
// user 가 {}에 들어감
const user2 = Object.assign({}, user);
user2.name = "Tom";

console.log(user);
console.log(user2);

//user key 값 찍기 (배열로 반환)
const keys = Object.keys(user);

console.log(keys);

// value 값 찍기 (배열로 반환)
const values = Object.values(user);

console.log(values);

// value key 둘다 찍기 (배열안에 배열)

const entries = Object.entries(user);

console.log(entries);

let arr = [
  // [key, value]
  ["mon", "월"],
  ["tue", "화"],
];

const fromEntries = Object.fromEntries(arr);

console.log(fromEntries);
