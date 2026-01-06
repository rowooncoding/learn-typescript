interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  age: 22,
  name: '캡틴'
}

getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a:number, b:number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string // 인덱스는 숫자이고 내부 요소는 문자이다.
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0]; // 'a'P

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp // 미리 키벨류의 속성을 정의
}

var obj = {
  sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/
}

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person{
  language: string;
}

var captain: Developer = {
  name: 'ironman',
  age: 22,
  language: 'ts'
}