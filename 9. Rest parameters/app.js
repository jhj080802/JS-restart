function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => (result += num));
  console.log(result);
}

// add(1, 2, 3); //6
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55

function add2(...numbers) {
  let result = numbers.reduce((prev, cur) => (prev += cur));
  console.log(result);
}

// add2(1, 2, 3); //6
// add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55

// const arrow = (num) => num * 2;
// arrow(5); //10
// const arrow2 = (num) => {
//   return num * 2;
// };
// arrow2(5); //10
// function function1(num) {
//   return num * 2;
// }

// add(1, 2, 3);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Jame", 17, "js", "React");
const user3 = new User("Ama", 23, "English");

console.log(user1);
console.log(user2);
console.log(user3);
