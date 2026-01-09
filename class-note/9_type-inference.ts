// 타입 추론
let a = 0; // 타입스크립트가 자동으로 a는 number라는 것을 추론

function getB(b = 10) { // b에 대한 타입 추론 자동 진행
  let c = 'hi'; // c는 string 타입으로 추론
  return b + c; // '10hi' -> 리턴값 자동 추론 -> 내가 원하는 결과가 아니야!
}

