interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Man' }
}
let tony = introduce();
// console.log(tony.skill) // 유니온 타입에서는 공통된 속성만 접근 가능
// 타입 단언을 사용한 요소 접근
if ((tony as Developer).skill) { // tony의 타입은 Devleper라고 단언하였기 때문에 Developer의 타입인 skill에 접근 가능
  console.log((tony as Developer).skill);
} else if ((tony as Person).age) {
  console.log((tony as Person).age);
}
// => 타입단언을 사용하면 이렇게 좀 코드가 복잡해지고 가독성도 안좋아져..

// 타입 가드 사용
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

// 타입 단언을 사용했던 것을 타입 가드로 간단하게 만듬
if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}