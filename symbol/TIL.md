### property key

-   문자형

### symbol()

-   유일한 식별자형을 만들 때 (유일성 보장)
-   변경 불가능한 원시 타입의 값
-   new 를 붙이지 않음

```
// 다른 개발자가 만들어 놓은 객체
const user = {
    name: "Mike",
    age: 30,
};

// 내가 작업

// 잘못 된 예시
// user.showName = function(){};

// 올바른 예시
// show name : 설명 -> 디버깅 시 편리, symbol 생성에 어떠한 영향도 미치치 X
const showName = Symbol("show name");
user[showName] = function () {
    console.log(this.name);
};

user[showName]();

// 사용자가 접속하면 보는 메세지
for (let key in user) {
    console.log(`His ${key} is ${user[key]}.`);
}
```

### Symbol.for() : 전역 심볼

-   하나의 심볼만 보장받을 수 이씨음
-   없으면 만들고, 있으면 가져오기 때문

    > -   Symbol() : 매번 다른 Symbol 값을 생성
    > -   Symbol.for() : 하나를 생성한 뒤 키를 통해 같은 Symbol을 **공유**

-   Symbol.for & keyfor

    ```
    const id1 = Symbol.for('id');

    Symbol.keyfor(id1); //"id"
    ```

-   description (Symbol)
    ```
    const id = Symbol('id입니다.');
    id.description; //"id입니다."
    ```
