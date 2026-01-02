// 파라미터의 타입을 정의하는 방식
// function sum (a: number, b: number) {
//   return a + b
// }

// 함수의 반환 값에 타입을 정의하는 방식
function add (): number {
  return 10;
}


// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}
// 파라미터보다 더 많은 인수를 넣으면 에러 발생!! (자바스크립트에서는 에러가 뜨지 않는다 -> 자바스크립트 보다 더 엄격하다.)
// sum(10, 20, 30 ,40);