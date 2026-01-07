// any는 모든 타입이 들어갈 수 있기 때문에 타입 스크립트의 장점을 살리지 못함
// function logMessage(value: any) { 
//   console.log(value);
// }
// logMessage('hello');

// 유니온 타입
var seho: string | number | boolean;

// 유니온 타입 함수에서의 활용
function logMessage(value: string | number) {
  // 유니온 타입의 장점 - 타입 가드
  if (typeof value === 'number') {
    // 여기서 value는 자연스럽게 number 형이 된다.
    value.toLocaleString(); // 숫자형 타입이 쓸 수 있는 메서드 사용
  }

  if (typeof value === 'string') {
    // 여기서는 문자열이 된다
    value.toString(); // 문자형 타입이 쓸 수 있는 메서드 사용
  }

  // 타입에 대한 에러 처리 - 지정된 타입 이외의 타입에 대한 에러 처리
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100); // 나는 문자열과 숫자형 모두 인자로 쓰고 싶어!