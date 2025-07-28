// if
const 인풋1 = document.getElementById("input1");
function check1() {
  const val = Number(인풋1.value);
  // if
  // 만약에 클라이언트가 입력한 숫자값이 0보다 클 경우 = true
  if (val > 0) {
    alert("클라이언트가 입력한 숫자는 0보다 큰 양수입니다.");
  }
  // 만약에 클라이언트가 입력한 숫자값이 0이랑 같거나 0 보다 작을 경우 = true
  if (val <= 0) {
    alert("클라이언트가 입력한 숫자는 0과 같거나 작은 음수입니다.");
  }
}

// if ~ else
function check2() {
  const 인풋2 = document.getElementById("input2");
  const 값 = Number(인풋2.value);
  if (값 > 0) {
    alert("양수입니다.");
  } else {
    alert("음수입니다.");
  }
}

// if - else if - else
const input = document.getElementById("inputAge");

// 확인하기 버튼을 클릭했을 때
function check4() {
  // 입력한 나이 값 얻어오기
  const age = Number(input.value);
  // || = or , 또는, 양 쪽 중에서 둘 중 하나라도 참일 경우 = true
  // && = and , 양 쪽 모두 참일 경우 = true
  console.log(age);

  if (age < 0 || age > 150) {
    // 1. 0 미만 150 초과
    alert("잘 못 입력하셨습니다.");
  } else if (age >= 0 && age <= 13) {
    alert("어린이");
  } else if (age <= 19) {
    alert("청소년");
  } else {
    alert("성인");
  }
}
