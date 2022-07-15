// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let uesrName = document.querySelector("#username");
let password = document.querySelector("#password");
let checkPassword = document.querySelector("#password-retype");

// 아이디를 입력받는다
// 4글자 이하일 경우 아이디는 4글자 이상이어야 합니다
// 4글자 이상일 경우 사용 가능한 아이디 입니다

// 비밀번호 입력 받은후에
// password = checkPassword 같은지 확인해서 

uesrName.onkeyup = function () {
  let successMessage = document.querySelector(".success-message");
  let failureMessage = document.querySelector(".failure-message");

  if(isMoreThan4Length(uesrName.value.length)) {
    successMessage.classList.remove("hide")
    failureMessage.classList.add("hide")
  } else {
    successMessage.classList.add("hide")
    failureMessage.classList.remove("hide")
  }
}

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value === 4
}

password.onkeyup = function() {
  let failureMessage = document.querySelector(".mismatch-message")
  if(isMatch(password.value, checkPassword.value)){
    failureMessage.classList.add('hide')
  }else{
    failureMessage.classList.remove('hide')
  }
}

checkPassword.onkeyup = function() {
  let failureMessage = document.querySelector(".mismatch-message")
  if(isMatch(password.value, checkPassword.value)){
    failureMessage.classList.add('hide')
  }else{
    failureMessage.classList.remove('hide')
  }
}

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2;
}