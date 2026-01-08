// value마다 인터페이스를 선언하면 너무 번거로워!
// -> 제네릭으로 인터페이스 선언!
// -> dropdown에 대한 인터페이스는 모두 필요가 없어짐!
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// interface Email {
//   value: string;
//   selected: boolean;
// }

// 제네릭으로 설정
const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// interface TrueFalse {
//   value: boolean;
//   selected: boolean;
// }

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// 이 함수에서 value인자는 string일수도 있고 number일수도 있다!
function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = String(item.value);
  option.innerText = String(item.value);
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
const selectTag = document.querySelector('#email-dropdown');
if (selectTag) {
  emails.forEach(function (email) {
    const item = createDropdownItem(email);
    selectTag.appendChild(item);
  });
}

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
});