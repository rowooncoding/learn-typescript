function sum(a: number, b: number): number {
  return a + b;
}

// sum(10, '20');
// '20'에서 타입 오류 발생
// 우리는 숫자만 들어가도록 타입을 설정 했는데 문자열이 들어와서 타입스크립트에서 알려준다

// sum(10, 20); // 올바른 사용

const result = sum(10, 20);
result.toLocaleString(); // result가 number 타입임을 인식