// 문제1: 기본 알림창 띄우기
function 첫번째함수() {
  alert("안녕하세요!");
}

// 문제 2: 텍스트 변경하기
function 텍스트변경() {
  const msg = document.getElementById("메시지영역");
  msg.innerText = "새로운 메시지!";
}

// 문제3: 배경색 변경하기
function 배경색변경(color) {
  /*
    document.querySelector("body").style.backgroundColor = color;
    document
        .querySelector("body")
            .style
                .backgroundColor = color;
  */
  // 매개변수 (Parameter) : 함수를 정의할 때 사용되는 변수
  const body = document.querySelector("body");
  body.style.backgroundColor = color;
}

// 문제4: 이름 입력받고 인사하기
const input1 = document.getElementById("이름입력");
const sayResult = document.getElementById("인사결과");
function 인사하기() {
  const name = input1.value;
  sayResult.innerHTML = "안녕하세요, " + name + "님!";
}
// 그 외 방법
// sayResult 앞에 자료형을 붙여주지 않았을 때
// 전역변수로 해서 function 이외에도 사용할 수 있도록 설정
// 함수 인사하기 바깥에서도 sayResult를 사용할 수 있도록 설정
// 되도록이면 sayResult 앞에 let, const를 붙여주는 것이 좋음
function 인사하기() {
  const sayResult = document.getElementById("이름입력").value;
  document.getElementById("인사결과").innerHTML =
    "안녕하세요, " + sayResult + "님";
  // const hi
  const hi = document.getElementById("인사결과");
  hi.innerHTML = "안녕하세요, " + name + "님!";
}

// inner HTML TEXT 차이점
/*
innerHTML :  내부에서 html태그를 인식하고 처리

innerText : 내부에서 html태그를 인식하지 않고 오직 순수한 텍스트 값만 다룸
*/
function Inner확인하기() {
  const a = document.getElementById("xInnerHTML");
  const b = document.getElementById("xInnerText");

  a.innerHTML = "<h1>안녕하세요</h1>";
  b.innerText = "<h1>안녕하세요</h1>";
}

// 문제5: 간단한 계산기
function 계산하기(연산자) {
  const n1 = document.getElementById("숫자1");
  const n2 = document.getElementById("숫자2");
  const culcResult = document.getElementById("계산결과");

  /*
          == 타입 변환을 해서 확인
          ===(java에서는 .equal로 표기)
        */
  if (연산자 == "+") {
    culcResult.innerText = n1 + n2;
  } else if (연산자 == "-") {
    culcResult.innerText = n1 - n2;
  } else if (연산자 == "*") {
    culcResult.innerText = n1 * n2;
  }
}

// 문제 6: 이미지 크기 조절하기
function 이미지크기조절(크기) {
  // javascript 내에서 작성하는 스타일은 2순위 스타일이기 때문에 사용 지양
  document.getElementById("조절이미지").style.width = 크기;
}

// 문제 6: 이미지 크기 조절하기(응용편)
function 이미지크기조절2(가로, 세로) {
  // javascript 내에서 작성하는 스타일은 2순위 스타일이기 때문에 사용 지양
  document.getElementById("조절이미지2").style.width = 가로;
  document.getElementById("조절이미지2").style.height = 세로;
}

// 문제 7: 글자 스타일 변경하기
function 글자스타일변경(색상, 크기, 굵기) {
  document.getElementById("스타일텍스트").style.color = 색상;
  document.getElementById("스타일텍스트").style.fontSize = 크기;
  document.getElementById("스타일텍스트").style.fontWeight = 굵기;
  // document.getElementById("스타일텍스트").style.fontStyle = 굵기;

  /*
    fontStyle = 기울이기, 어떤 디자인으로 폰트를 꾸며줄지에 대해 설정
    fontWeight = 폰트의 굵기 100(얇음) ~ 900(두꺼워짐)
    400 - 일반적인 폰트의 두께
    700 - bold 두께
  */
}

// 문제 8: 현재 시간 보여주기
/*
    Number도 추후에 만들어진 데이터 타입
        -> 단순히 숫자로 만들고 싶은 문자열 외부를 Number라는 글자를 작성하고 소괄호()로 감싸주면 되는 역할

    Date는 다양한 정보와 기능을 담고 있는 설계도
        -> new를 사용해서 JS 개발자가 제공하는 기능 중에 현재 JS를 사용하는 개발자가 필요한 기능만 작성해서 사용

    변환/ 계산할 때는 new 라는 명칭을 사용하지 않음

    새로운 복잡한 것을 만들 때는 new라는 명칭 사용

    getMonth() 는 0부터 시작하게끔 배치
                Month 월을 사용할 때는 +1을 붙여주는 것이 관례
*/
function 시간보여주기() {
  let 지금 = new Date(); // 객체, 현재 시간 정보를 가져오는 명령
  const timeResult = document.getElementById("시간표시");
  timeResult.innerHTML =
    지금.getFullYear() +
    "년 " +
    (지금.getMonth() + 1) +
    "월 " +
    지금.getDate() +
    "일 " +
    지금.getHours() +
    "시 " +
    지금.getMinutes() +
    "분";
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide#numbers_and_dates
  // new Date() .getFullYear(), .getMonth(), .getDate(), .getHours(), .getMinutes()
}

// 문제 9: 숨기기/보이기 기능
let toggleSwitch = true;
function 토글기능() {
  const toggleBtn = document.getElementById("토글박스");
  if (toggleSwitch === true) {
    toggleBtn.style.display = "none";
    toggleSwitch = false;
  } else {
    toggleBtn.style.display = "block";
    toggleSwitch = true;
  }
}

// 문제 10: 색상 맞추기 미니게임
let 정답색상 = "red";
function 게임체크(선택색상) {
  if (선택색상 === 정답색상) {
    document.getElementById("게임결과").innerText = "정답!";
  } else {
    document.getElementById("게임결과").innerText = "틀렸습니다!";
  }
}
