// 소비자가 회원가입 시 작성해야 할 값을 제대로 작성했는지 체크
// 그런데 만약에 모두 다 제대로 작성 안했다면 false 작성 제대로 안함 처리
// 값을 하나씩 제대로 작성할 떄 마다 true로 변경 해줄 것!
const checkList = {
  // input 내부에 개발자가 원하는 대로 아이디 값을 제대로 작성했다면 true
  inputId: false, // input 내부에 개발자가 원하는 대로 아이디 값을 제대로 작성했다면 true
  inputPw: false, // input 내부에 위 inputPw와 일치하게 비밀번호를 작성했다면 true
  inputPwCheck: false, // input 내부에 개발자가 원하는대로 이름을 제대로 작성했다면 true
  inputName: false,
};

const signupForm = document.getElementById("signupForm");
const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const inputPwCheck = document.getElementById("inputPwCheck");
const inputName = document.getElementById("inputName");
const btn = document.getElementById("btn");
const idResult = document.getElementById("idResult");
const pwResult = document.getElementById("pwResult");
const pwCheckResult = document.getElementById("pwCheckResult");
const nameResult = document.getElementById("nameResult");

const regExpId = /^[A-Za-z0-9\-\_]{6,16}$/;

const regExpName = /^[가-힣]{2,15}$/;
const regExpPw = /^[A-Za-z\d!@#$%^&*]{8,20}$/;

// 아이디 검사
inputId.addEventListener("input", (e) => {
  const valId = e.target.value;

  if (valId.trim().length == 0) {
    // 내부에 아무것도 작성 안한게 맞다면
    idResult.textContent = "영어, 숫자, -, _, 6 ~ 16글자 사이 작성하세요.";
    e.target.addEventListener = "";
    idResult.classList.remove("check", "error");
    checkList["inputId"] = false;
    return;
  }

  if (regExpId.test(valId)) {
    idResult.textContent = "유효한 아이디 형식입니다.";
    idResult.classList.add("check");
    idResult.classList.remove("error");
    checkList["inputId"] = true;
  } else {
    idResult.textContent = "유효하지 않은 아이디 형식입니다.";
    idResult.classList.add("error");
    idResult.classList.remove("check");
    checkList["inputId"] = false;
  }
});

// 비밀번호 검사
inputPw.addEventListener("input", (e) => {
  const valPw = e.target.value;

  if (valPw.trim().length == 0) {
    // 내부에 아무것도 작성 안한게 맞다면
    pwResult.textContent =
      "영어 대/소문자 + 숫자 + 특수문자(!@#$%^&*) 포함, 8 ~ 20글자 사이 작성하세요.";
    e.target.addEventListener = "";
    pwResult.classList.remove("check", "error");
    checkPw기능();
    checkList["inputPw"] = false;
    return;
  }

  if (regExpPw.test(valPw)) {
    pwResult.textContent = "유효한 비밀번호 형식입니다.";
    pwResult.classList.add("check");
    pwResult.classList.remove("error");
    checkList["inputPw"] = true; // 비밀번호 형식이 일치하다면 위 작성한 checkList에서 inputpw 에 해당하는 boolean(true/false)을 true로 변경하겠다.
  } else {
    pwResult.textContent = "유효하지 않은 비밀번호 형식입니다.";
    pwResult.classList.add("error");
    pwResult.classList.remove("check");
    checkList["inputPw"] = false;
  }

  checkPw기능();
});

// 비밀번호 확인 함수
function checkPw기능() {
  // trim() : 문자열 좌 우에서 공백을 제거하는 메서드(함수=기능)
  const pwVal = inputPw.value.trim();
  const checkVal = inputPwCheck.value.trim();

  // 0이거나 또는 0인게 둘 중 하나라도 참이라면
  if (pwVal.length == 0 || checkVal.length == 0) {
    pwCheckResult.textContent = "비밀번호를 먼저 입력해주세요.";
    // pwCheckResult.style.background = "배경색"; 2순위 형식의 style css
    // pwCheckResult 곳에 class 명칭을 추가하거나 제거하겠다. 4순위 style css
    // 태그 명칭 옆에 class 명칭을 지우겠다. check와 error 제거하겠다.
    pwCheckResult.classList.remove("check", "error");
    checkList["inputPwCheck"] = false;
  }

  // 만약에
  if (pwVal === checkVal) {
    // 비밀번호 일치할 경우
    pwCheckResult.textContent = "비밀번호가 일치합니다.";
    pwCheckResult.classList.add("check");
    pwCheckResult.classList.remove("error");
    checkList["inputPwCheck"] = true;
  } else {
    // 비밀번호와 비밀번호 확인이 일치하지 않을 경우
    pwCheckResult.textContent =
      "비밀번호가 일치하지 않습니다. 다시 확인해주세요.";
    pwCheckResult.classList.add("error");
    pwCheckResult.classList.remove("check");
    checkList["inputPwCheck"] = false;
  }
  return;
}

// 비밀번호 확인
inputPwCheck.addEventListener("input", checkPw기능);

// 이름 유효성 검사
inputName.addEventListener("input", (e) => {
  const valName = e.target.value; // input에서 소비자가 작성한 값 가져와 담아주기

  if (valName.trim().length == 0) {
    // 내부에 아무것도 작성 안한게 맞다면
    nameResult.textContent = "한글 2 ~ 15자 작성하세요.";
    nameResult.classList.remove("check", "error");
    e.target.value = "";
    checkList["inputName"] = false;
    return; // 제대로 작성 안했으니 아래 항목은 사용할 수 없도록 돌려보내기 설정
  }

  if (regExpName.test(valName)) {
    nameResult.textContent = "유효한 이름 형식입니다.";
    nameResult.classList.add("check");
    nameResult.classList.remove("error");
    checkList["inputName"] = true;
  } else {
    nameResult.textContent = "유효하지 않은 아이디 형식입니다.";
    nameResult.classList.add("error");
    nameResult.classList.remove("check");
    checkList["inputName"] = false;
  }
});

// 회원가입 버튼
btn.addEventListener("submit", (e) => {
  // 모든 checkList 항목이 true 인지 확인하고 true가 아니라면 회원가입 불가!! true라면 회원가입 가능
  // 모든 유효성 검사 통과 여부 확인

  // 만약에 아이디 값이 일치하지 않는게 맞다면 false 가 맞다면
  if (checkList.inputId == false) {
    alert("아이디가 유효하지 않습니다.");
    inputId.focus();
    e.preventDefault(); // 제출방지, button 타입이 submit 일 때 주로 사용
    return;
  }

  // 만약에 비밀번호 값이 일치하지 않는게 맞다면 false 가 맞다면
  if (checkList.inputPw == false) {
    alert("비밀번호가 유효하지 않습니다.");
    e.preventDefault(); // 제출방지, button 타입이 submit 일 때 주로 사용
    inputPw.focus();
    return;
  }

  // 만약에 비밀번호 확인 값이 일치하지 않는게 맞다면 false 가 맞다면
  if (checkList.inputPwCheck == false) {
    alert("비밀번호 확인이 유효하지 않습니다.");
    inputPwCheck.focus();
    e.preventDefault(); // 제출방지, button 타입이 submit 일 때 주로 사용
    return;
  }

  // 만약에 아이디 값이 일치하지 않는게 맞다면 false 가 맞다면
  if (checkList.inputName == false) {
    alert("이름이 유효하지 않습니다.");
    inputName.focus();
    e.preventDefault(); // 제출방지, button 타입이 submit 일 때 주로 사용
    return;
  }

  // 회원가입 버튼을 클릭했을 때 성별 체크 했는지 확인하도록 gender 위치를 버튼 내에 작성
  // 성별 선택 여부 확인
  const gender = document.querySelector("[name='gender']:checked");
  if (gender == null) {
    alert("성별을 선택해주세요.");
    e.preventDefault(); // 제출방지, button 타입이 submit 일 때 주로 사용
    return;
  }

  // 모든게 true이고 회원가입이 완료되면
  alert("회원가입이 완료되었습니다.");
  signupForm.submit(); // 회원가입 폼 제출 완료 기능 설정
});
