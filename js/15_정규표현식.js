/* 입력 받은 이름이 한글 2 ~ 5 글자 사이가 맞는지 확인 */
const inputName = document.getElementById("inputName");
const nameResult = document.getElementById("nameResult");

// inputName이 입력되었을 경우, input 의 경우 e.target.value 가 거의 필수!
inputName.addEventListener("input", (e) => {
  /* 
    input 이벤트: 입력과 관련된 모든 행동
    (단, 어떤 키로 입력했는지 컴퓨터가 알 수 없음)
  */
  // 입력된 값을 얻어오기
  const val = e.target.value; // 이벤트가 발생한 요소의 값 가져오기

  // 아무것도 입력하지 않은 경우
  if (val.trim().length == 0) {
    nameResult.textContent = ""; // 입력된 값이 존재하지 않습니다.
    return;
  }

  /* 조건에 맞는 정규 표현식 객체 생성 */
  const regExp = /^[가-힇]{2,5}$/;

  /*
    정규식객체.test(문자열) : 
    - 문자열이 정규식에 일치하면 true
    - 아니면 false 
  */
  if (regExp.test(val)) {
    // 소비자가 작성한 값이  [가-힇] 내 이고, 2글자에서 5글자 사이에 입력한 것이 맞다면
    nameResult.textContent = "유효한 이름 형식입니다.";
    nameResult.style.color = "green";
  } else {
    nameResult.textContent = "유효하지 않은 이름 형식입니다.";
    nameResult.style.color = "red";
  }
});

/* 입력 받은 값이 휴대전화 번호가 맞는지 확인 */
const inputPhone = document.getElementById("inputPhone");
const phoneResult = document.getElementById("phoneResult");

inputPhone.addEventListener("input", (e) => {
  const value = e.target.value; // 입력한 값

  /* 정규식을 이용한 핸드폰 번호 검사 */
  const regExp = /^01[01679]-\d{3,4}-\d{4$}/;
  /* 
    앞자리는 010,011,016,017,019 가능
    - 다음에 오는 \d 숫자는 3자리 또는 4자리만 가능
    - 다음에 오는 \d 숫자는 4자리만 가능
    /^ 정규식 시작 정규식 종료 $/
  */

  if (regExp.test(value)) {
    // 입력받은 값이 정규식과 일치하면
    phoneResult.textContent = "유효한 번호 형식입니다.";
    phoneResult.classList.add("check");
    phoneResult.classList.remove("uncheck");
  } else {
    phoneResult.textContent = "번호가 유효하지 않습니다.";
    phoneResult.classList.add("uncheck");
    phoneResult.classList.remove("check");
  }
});
