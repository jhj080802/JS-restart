// let arr = [1, 5, 4, 2, 3];
// arr.sort();
// console.log(arr); // [1, 2, 3, 4, 5]

// let arr2 = ["a", "d", "e", "b", "c"];
// arr2.sort();
// console.log(arr2); // ['a', 'd', 'e', 'b', 'c']

// let arr3 = [27, 8, 5, 12];
// arr3.sort();
// //정렬할 때 요소를 문자열로 침
// // => 1과 1로 시작하는 것이 먼저
// console.log(arr3); // [27, 8, 5, 12]

// //올바른 코드
// let arr4 = [27, 8, 5, 12];

// arr4.sort((a, b) => {
//   return a - b;
// });

// console.log(arr4); // [5, 8, 12, 27]

// 배열에 있는 모든 수 합치기
// let arr = [1, 2, 3, 4, 5];

// for,for of, forEach

// let result = 0;
// arr.forEach((num) => {
//   result += num;
// });

//------------------------------------------
// arr.reduce()
// 인수로 함수를 받음
// (누적 계산값, 현재 값) => {return 계산값}
//----------------------------------------------

// // prev : 계산된 값
// // cur : 현재 값
// const result = arr.reduce((prev, cur) => {
//   return prev+cur;
// }, 0); // 0은 옵션임(초기값) 안 쓰면 배열의 첫번째 값이 들어감
// console.log(result);

let userList = [
  { name: "Mike", age: 30 },
  { name: "Hao", age: 15 },
  { name: "Tom", age: 34 },
  { name: "Elsa", age: 6 },
  { name: "Anna", age: 12 },
  { name: "Nami", age: 54 },
  { name: "Lucy", age: 16 },
  { name: "Chan", age: 18 },
  { name: "ploe", age: 26 },
];

// 성인
let result = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);
console.log(result);

// 나이 합
let result2 = userList.reduce((prev, cur) => {
  return (prev += cur.age);
}, 0);

console.log(result2);

//이름 글자 수
let result3 = userList.reduce((prev, cur) => {
  if (cur.name.length === 3) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result3);
