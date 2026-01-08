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