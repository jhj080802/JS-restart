# object methods

```
let n = "nema";
let a = "age";

const user = {
    [n]: "mike",
    [a]: 30,
    [1 + 4]: 5,
};

console.log(user);
```

---

```
function makeOBJ(key, val) {
    return {
        [key]: val,
    };
}

const obj = makeOBJ("나이", 33);

console.log(obj);
```

---

## assign - 복사

#### 잘못된 방식

- user2를 변경하면 user도 변경 됨 = 하나의 객체로 봄

```
const user = {
    name: "mike",
    age: 30,
};
const user2 = user;
user2.name = "Tom";

console.log(user);
console.log(user2);
```

### 올바른 방식 - assign

- {}: 초기 값 (빈값)
- user 가 {}에 들어감

```
const user2 = Object.assign({}, user);
user2.name = "Tom";

console.log(user);
console.log(user2);
```

---

## user key 값 찍기 (배열로 반환)

```
const user = {
    name: "mike",
    age: 30,
};

const keys = Object.keys(user);

console.log(keys);
```

---

## value 값 찍기 (배열로 반환)

```
const user = {
    name: "mike",
    age: 30,
};

const values = Object.values(user);

console.log(values);
```

---

## value key 둘다 찍기 (배열안에 배열) - entries

```
const user = {
    name: "mike",
    age: 30,
};

const entries = Object.entries(user);

console.log(entries);
```

---

## fromEntries

```
let arr = [
    // [key, value]
    ["mon", "월"],
    ["tue", "화"],
];

const fromEntries = Object.fromEntries(arr);

console.log(fromEntries);
```
