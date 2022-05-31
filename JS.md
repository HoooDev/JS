# JavaScript



## 변수와 식별자

#### let

- 재할당 할 예정인 변수 선언 시 사용
- 변수 재선언 불가능
- 블록 스코프

#### const

- 재할당 할 예정이 없는 변수 선언 시 사용
- 변수 재선언 불가능
- 블록 스코프

#### 블록 스코프

- if, for, 함수 등의 중괄호 내부를 가리킴
- 블록 스코프를 가지는 <u>변수는 블록 바깥에서 접근 불가능</u>

```javascript
let x = 1
if (x === 1) {
    let x = 2
    console.log(x) // 2
}
console.log(x) // 1
```



## 데이터 타입

자바스크립트의 모든 값은 특정한 데이터 타입을 가짐 (크게 원시타입, 참조타입으로 분류)

#### 원시타입(Primitive type)

- 객체(object)가 아닌 기본 타입
- 변수에 해당 타입의 값이 담김
- 다른 변수에 복사할 때 실제 값이 복사됨
- 숫자, 문자열, undefined, null, Boolean

#### 참조 타입(Reference type)

- 객체(object) 타입의 자료형
- 변수에 해당 객체의 참조 값이 담김
- 다른 변수에 복사할 때 참조 값이 복사 됨
- 함수, 배열, 객체



## 연산자

#### 동등 비교 연산자(==)

- 암묵적 타입 변환
- 특별한 경우 제외 사용 X

#### 일치 비교 연산자(===)

- 엄격한 비교 (두 비교 대상의 타입과 값 모두 같은지 비교)

#### 논리 연산자

- and -> &&
- or -> ||
- not -> !



## 조건문

#### if, else if, else

- 조건은 **소괄호()** 안에 작성
- 실행할 코드는 **중괄호{}** 안에 작성
- 블록 스코프 생성

```javascript
if (condition) {
    // do something
} else if (condition) {
    // do something
} else {
    // do something 
}
```

#### switch

- 표현식의 결과값을 이용한 조건문
- 표현식의 결과값과 case문의 오른쪽 값을 비교
- break, default문은 [선택적]으로 사용 가능
- break문에 없는 경우 break문을 만나거나 default문을 실행 할 때 까지 다음 조건문 실행
- 블록스코프 생성

```javascript
switch(expression) {
    case 'first value': {
        // do something
        [breake]
    case 'second value': {
        // do something
        [breake]
    }
   	[default: {
     // do something
     }]
}
```



## 반복문

#### while

```javascript
while (condition) {
    // do something
}
```

#### for 

```javascript
for (initialization; condition; expression) {
    // do something
}
```

- initialization
  - 최초 반복문 진입 시 1회만 실행
- condition
  - 매 반복 시행 전 평가되는 부분
- expression
  - 매 반복 시행 이후 평가되는 부분
- 블록 스코프 생성

#### for ... in

```javascript
for (variable in object) {
    // do something
}
```

- 객체(object)의 속성(key)들을 순회 할 때 사용
- 배열도 순회 가능하지만 권장 X

#### for ... of

```javascript
for (variable of iterables) {
    // do something
}
```

- 반복 가능한 객체를 순회하며 값을 꺼낼 때 사용

  

## 함수

#### 함수 선언식

- 함수의 이름과 함께 정의하는 방식
- 3가지 부분으로 구성
  - 함수의 이름
  - 매개변수
  - 몸통(중괄호 내부)

```javascript
funtion name(args) {
    // do something
}
```

#### 함수 표현식

- 함수를 표현식 내에서 정의하는 방식
- 함수의 이름을 생략하고 익명 함수(이름이 없는 함수)로 정의 가능
- 3가지 부분으로 구성
  - 함수의 이름 (생략 가능)
  - 매개변수
  - 몸통

```javascript
const name = function(args){
    // do something
}
```

```javascript
const add = function(num1, num2) {
    return num1 + num2
}
add(1, 2)
```

#### 기본 인자(default)

- 인자 작성 시 '=' 문자 뒤 기본 인자 선언 가능

```javascript
const greeting = function (name = 'Anonymous') {
    return `Hi ${ name }`
}
greeting() // Hi Anonymous
```

#### 매개변수와 인자의 개수 불일치 허용

#### Rest operator

- rest operator(...)를 사용하면 함수가 정해지지 않은 수의 매개변수를 배열로 받음 (python의 *args와 유사)
  - 만약 rest operator로 처리한 매개변수에 인자가 넘어오지 않을 경우에는, 빈 배열로 처리

```javascript
const restOpr = function (arg1, arg2, ...restArgs) {
    return [arg1, arg2, restArgs]
}
restOpr(1,2,3,4,5)
restOpr(1,2)
```

#### Spread operator

- spread operator(...)를 사용하면 배열 인자를 전개하여 전달 가능.

```javascript
const spreadOpr = function(arg1, arg2, arg3) {
    return arg1 + arg2 + arg3
}
const numbers = [1,2,3]
spreadOpr(...numbers) // 6
```

```javascript
const array = [1, 2, 3]
const newArray = [0, ...array, 4]
console.log(newArray) // [0, 1, 2, 3, 4]
```

- spread operator(...)를 사용하면 배열 내부에서 배열 전개 가능.
- 얕은 복사에 활용 가능

#### 호이스팅(hoisting) - 함수 선언식

- **함수 선언식**으로 선언한 함수는 var로 정의한 변수처럼 **hoisting 발생**
- 함수 호출 이후에 선언해도 동작

```javascript
add(2, 7) // 9
function add (num1, num2) {
    return num1 + num2
}
```

#### 호이스팅(hoisting) - 함수 표현식

- 반면 **함수 표현식**으로 선언한 함수는 함수 정의 전에 호출 시 **에러 발생**
- 함수 표현식으로 정의 된 함수는 변수로 평가되어 변수의 scope 규칙을 따름



#### 화살표 함수(Arrow Function)

- 함수를 비교적 간결하게 정의할 수 있는 문법
- function 키워드 생략 가능
- 함수의 매개변수가 단 하나 뿐이라면, '()'도 생략 가능
- 함수 몸통이 표현식 하나라면 '{}'과 return도 생략 가능

```javascript
const arrow1 = function (name) {
    return `hello, ${name}`
}
// 1. function 키워드 삭제
const arrow2 = (name) => { return `hello, ${name}` }

// 2. 매개변수가 1개일 경우에만 ( ) 생략 가능
const arrow2 = name => { return `hello, ${name}` }

// 3. 함수 바디가 return을 포함한 표현식 1개일 경우에 {} & return 삭제 가능
const arrow2 = name => return `hello, ${name}`

```

#### 문자열

|    메서드    |                      설명                      |
| :----------: | :--------------------------------------------: |
| **includes** | 특정 문자열의 **존재여부를 참/거짓 으로 반환** |
|  **split**   |   문자열을 토큰 기준으로 **나눈 배열 반환**    |
| **replace**  | 해당 문자열을 **대상 문자열로 교체하여 반환**  |
|   **trim**   |      문자열의 **좌우 공백 제거하여 반환**      |

#### 배열

- 키와 속성들을 담고 있는 참조 타입의 객체
- 순서를 보장
- 대괄호를 이용하여 생성, 0을 포함한 양의 정수 인덱스로 특정 값에 접근 가능
- 배열의 길이는 arr.length 형태로 접근 가능
  - 배열의 마지막 원소는 arr.length-1로 접근

**주요 메서드 목록 (1)**

|       메서드        |                         설명                         |           비고           |
| :-----------------: | :--------------------------------------------------: | :----------------------: |
|     **reverse**     |   **원본 배열**의 요소들의 순서를 **반대로 정렬**    |                          |
|   **push & pop**    |      배열의 **가장 뒤에** 요소를 **추가/제거**       |                          |
| **unshift & shift** |    배열의 **가장 앞에** 요소를 **추가 또는 제거**    |                          |
|    **includes**     | 배열에 특정 값이 존재하는지 판별 후 **참/거짓 반환** |                          |
|     **indexOf**     | 배열에 특정 값이 존재하는지 판별 후 **인덱스 반환**  |    요소 X 시 -1 반환     |
|      **join**       |    배열의 모든 **요소를 구분자를 이용하여 연결**     | 구분자 생략 시 쉼표 기준 |

**주요 메서드 목록(2) - 심화**

- 배열을 순회하며 특정 로직을 수행하는 메서드
- 메서드 호출 시 인자로 callback 함수* 를 받는 것이 특징
  - callback 함수 : 어떤 함수의 내부에서 실행 될 목적으로 인자를 넘겨받는 함수

|   메서드    |                             설명                             |
| :---------: | :----------------------------------------------------------: |
| **forEach** |        배열의 각 요소에 대해 콜백 함수를 한 번씩 실행        |
|   **map**   |  **콜백 함수의 반환 값**을 요소로 하는 **새로운 배열 반환**  |
| **filter**  | **콜백 함수의 반환 값이 참인 요소들만** 모아서 **새로운 배열을 반환** |
| **reduce**  |  **콜백 함수의 반환 값들을 하나의 값(acc)에 누적 후 반환**   |
|  **find**   |       콜백 함수의 **반환 값이 참이면 해당 요소를반환**       |
|  **some**   |  배열의 **요소 중 하나라도 판별 함수를 통과**하면 참을 반환  |
|  **every**  |    배열의 **모든 요소가 판별 함수를 통과**하면 참을 반환     |

#### 콜백 함수의 매개변수

- element : 배열의 요소
- index : 배열 요소의 인덱스
- arr : 배열 자체

#### reduce메서드

- acc : 반환값이 누적되는 변수

- initialValue(obtional) : 최초 acc 에 할당 되는 값, default는 배열의 첫번째 값



## 객체

#### 객체의 정의와 특징

- 객체는 속성의 집합이며, 중괄호 내부에 key와 value의 쌍으로 표현
- key는 문자열 타입만 가능
- value는 모든 타입(함수포함) 가능
- 객체 요소 접근은 점 또는 대괄호로 가능
  - (참고) key 이름에 띄어쓰기 같은 구분자가 있으면 대괄호 접근만 가능

#### 객체와 메서드

- 메서드는 어떤 객체의 속성이 참조하는 함수
- 객체.메서드명() 으로 호출 가능
