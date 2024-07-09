// const User = function (name, age) {
//   this.name = name;
//   this.age = age;
//   this.showName = function () {
//     console.log(this.name);
//   };
// };

// // User.prototype.showName = function () {
// //   console.log(this.name);
// // };

// const mike = User("Mike", 30);

// class User2 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showName() {
//     console.log(this.name);
//   }
// }

// const tom = User2("Tom", 19);

// extends

class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive...");
  }
  stop() {
    console.log("STOP!");
  }
}

class Bmw extends Car {
  constructor(color) {
    super(color);
    this.navigation = 1;
  }
  park() {
    console.log("PARK");
  }
}

const z4 = new Bmw("black");

// class Car {
//   constructor(color) {
//     this.color = color;
//   }
//   stop() {
//     console.log("STOP!");
//   }
// }

// class Bmw extends Car {
//   park() {
//     console.log("PARK");
//   }
//   // 같은 이름 메소드
//   stop() {
//     super.stop();
//     console.log("OFF");
//   }
// }

// const z4 = new Bmw("black");
