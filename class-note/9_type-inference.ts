// 타입 추론
let a = 0; // 타입스크립트가 자동으로 a는 number라는 것을 추론

function getB(b = 10) { // b에 대한 타입 추론 자동 진행
  let c = 'hi'; // c는 string 타입으로 추론
  return b + c; // '10hi' -> 리턴값 자동 추론 -> 내가 원하는 결과가 아니야!
}

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
};

let shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello',
}

// 타입 추론 기본 3 - 인터페이스 확장에서의 타입 추론
interface Dropdown2<T> {
  value: T;
  title: string;
};

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

let detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a',
}

// Best Common Type
let arr = [1, 2, true, true, 'a']; // 유니온 타입으로 추론