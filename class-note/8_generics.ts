// // 유니온 타입으로 여러 타입의 파라미터 값을 받기
// function logText(text: string | number) {
//   console.log(text);
//   // 유니온 타입의 문제점
//   // 1. 지정된 속성에 맞는 타입의 미리보기만 지원해줌
//   return text;
// }

// const text = logText('a');
// // 2. 유니온 타입을 사용하면 문자열에 대한 함수를 사용할 때 에러가 뜬다
// // text.split(); -> 타입이 number인지, string인지 몰라서 에러가 발생한다

// logText(1);

// 제네릭 사용해보기
function logText<T>(text: T): T { // 함수에 들어올 인자는 호출시에 정의
  console.log(text);
  return text;
}

// 문자열 타입으로 정의
const str = logText<string>('a'); // 여기서 제네릭 타입으로 정의
str.split(''); // 이제 가능!

// 불린형으로 정의
const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}
// 인터페이스로 정의된 제네릭을 문자열로 선언하는 방법
const obj: Dropdown<string> = {
  value: 'abc',
  selected: true
}

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach((text) => {
    console.log(text);
  });
  return text;
}

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
// T는 length라는 속성이 있는 타입이야! 라고 선언
// 그래서 숫자형은 인자로 들어롤 수 없음
function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

// 제네릭 타입제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
// 타입 정의에 있는 key에 해당하는 것만 받기
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
getShoppingItemOption('name');
// getShoppingItemOption(10); -> key만 받을 수 있기 때문에 에러!