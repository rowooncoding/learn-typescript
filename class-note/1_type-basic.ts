// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자 선언
let num: number = 10;

// TS 배열 선언
let arr: Array<number> = [];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk']; // 숫자는 들어가지 못함!
let items: number[] = []; // 배열을 리터럴로 선언

// TS 튜플 선언
// 배열의 순서를 정하는 것
let adress: [string, number] = ['gangnam', 100];

// TS 객체 선언
let obj: object = {};
let person: { name: string, age: number } = {
  name: 'thor',
  age : 1000
}

// TS 진위값(boolean)
let show: boolean = true;
