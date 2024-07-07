## toString

-   숫자 -> 문자
-   10진수 -> 2진수/16진수

```
let num = 10;

num.toString(); // "10"
num.toString(2); // "1010"

let num2 = 225;
num2.toString(16); //"ff"

```

---

## Math

ex)

-   Math.PI
-   Math.ceil() : 올림
-   Math.floor() : 내림
-   Math.round() : 반올림

```
let num1 = 5.1;
let num2 = 5.7

Math.ceil(num1); // 6
Math.ceil(num2); // 6

Math.floor(num1); //5
Math.floor(num2); //5

Math.round(num1); //5
Math.round(num2); //6

```

-   toFixed() : 소수점 자릿수
    -   **문자열로 반환함**
        => **number()**을 이용해 **숫자로 변환하는 작업**을 해야함

```
let userRate = 30.1234;

//문자열 반환
userRate.toFixed(2); // "30.12"
userRate.toFixed(0); // "30"
userRate.toFixed(6); // "30.123400"

// 숫자로 변환
Number(userRate.toFixed(2)) // 30.12
```

---

## isNaN

```
let x = Number('x');

x == NaN; // false
x === NaN; // false
NaN == NaN; // false

isNaN(x) //true
isNaN(3) // false
```
