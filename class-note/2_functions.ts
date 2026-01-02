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

// 함수의 옵셔널 파라미터(선택적 파라미터)
// 파라미터를 어떨 때는 문자열 하나만, 어떨때는 문자열과 콜백함수 이런 식으로 때에 따라 여러가지 인자를 넘기고 싶을 때
// 함수 여러개를 만든다? No, 옵셔널을 사용한다. -> 변수 뒤에 물음표를 넣어서 표시한다.
function log (a: string, b?: string) {

}
log('hello world'); 
log('hello, ts', "abc"); // 원래라면 에러가 발생해야 했지만 문제가 없는 모습