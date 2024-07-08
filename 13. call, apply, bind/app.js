// // call
// const mike = {
//   name: "Mike",
// };

// const tom = {
//   name: "Tom",
// };

// function showThisName() {
//   console.log(this.name);
// }

// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }

// // 첫 번째 매개면수 : 함수의 this로 사용될 값(mike)
// // 두 번째 매개변수 ~ (배열) : 함수가 사용할 매개변수(1999, singer)
// update.apply(mike, [1999, "singer"]);

// console.log(mike); //{name: 'Mike', birthYear: 1999, occupation: 'singer'}

const nums = [3, 10, 1, 6, 4];

// = Math.min.apply(null, [3, 10, 1, 6, 4])
const minNum = Math.min.apply(null, nums);
const maxNum = Math.max.apply(null, nums);

console.log(minNum);
console.log(maxNum);

// = Math.min.apply(null, 3, 10, 1, 6, 4)
const minNum2 = Math.min.call(null, ...nums);
const maxNum2 = Math.max.call(null, ...nums);

console.log(minNum2);
console.log(maxNum2);
