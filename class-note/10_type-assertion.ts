// 타입 단언
let a; // 처음에 a 선언

// 여러 복잡한 연산
a = 20;
a = 'a';

// b에 a의 타입을 넣음
// 현재 a의 타입은 any이기 때문에 전부 허용됨
let b = a as string; // 타입 단언 -> a는 무조건 string이야
// => 타입스크립트보다 개발자가 더 타입을 잘 알고 있으니, 타입스크립트는 추론을 하지마! 내가 지정한 타입으로 간주해!

// DOM API - 실전 예시
// <div id="app">hi</div>
let div = document.querySelector('div') as HTMLDivElement; // 내가 가져올 때는 이 돔 요소가 무조건 있을거야!
// 타입 단언 안하면 -> 쿼리셀렉터가 돌아가는 시점에서 div가 있을거라는 보장이 없기 때문에 확인 하고 가져와야 한다.
if (div) {
  div.innerText
}
// 타입 단언하면 그냥 가져올 수 있다.
div.innerText