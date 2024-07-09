// const car = {
//     wheels: 4,
//     dirive() {
//         console.log("drive...");
//     },
// };

// const bmw = {
//     color: "red",
//     navigation: 1,
// };

// const benz = {
//     color: "black",
// };

// const audi = {
//     color: "blue",
// };

// // car가 bmw의 프로토타입이 됨
// // bmw은 car에 상속을 받음
// bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;

// // 1. bwm객체 내부에서 wheels 프로토를 찾음
// // 2. 있으면 => 거기서 탐색을 멈춤
// // 2. 없으면 => __proto__ 타입이서 확인
// console.log(bwm.wheels); // 4

// bmw.__proto__ = car;

// const x5 = {
//     color: "white",
//     name: "x5",
// };

// x5.__proto__ = bmw;

// const car = {
//     wheels: 4,
//     dirive() {
//         console.log("drive...");
//     },
// };

// const Bmw = function (color) {
//     this.color = color;
// };

// const x5 = new Bmw("red");
// const z4 = new Bmw("blue");

// x5.__proto__ = car;
// z4.__proto__ = car;

// const Bmw = function (color) {
//   this.color = color;
// };

// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function () {
//   console.log("drive..");
// };
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function () {
//   console.log("Stop!");
// };
// Bmw.prototype = {
//   wheels: 4,
//   drive() {
//     console.log("drive..");
//   },
//   navigation: 1,
//   stop() {
//     console.log("Stop!");
//   },
// };

// const x5 = new Bmw("red");
// const z4 = new Bmw("blue");

const Bmw = function (color) {
  const c = color;
  this.getColor = function () {
    console.log(c);
  };
};

const x5 = new Bmw("red");
