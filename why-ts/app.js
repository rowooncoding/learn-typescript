// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerHTML = user.name;
      email.innerHTML = user.email;

      // 타입스크립트를 써야하는 이유
      // 1. 주소가 어떤 타입으로 들어있는지 몰라서 오류가 발생한다.
      // 2. 만약 address를 addres로 쓰는 등 오탈자가 나게 되면 undefined가 된다.
      address.innerHTML = user.address.street + ", " + user.address.city;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
