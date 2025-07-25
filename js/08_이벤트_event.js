/* 예제 1 */
const btnE = document.getElementById("btn-e");
const btnEvent = document.getElementById("btn-event");
const result1 = document.getElementById("result1");
// 0. 매개변수(=파라미터)의 값을 e 나 event 이외의 명칭으로 작성가능하지만 개발자들 간의 약속 명칭으로 e나 event 사용
// 1. e로 작성한 방법
btnE.addEventListener("click", function (e) {
  console.log("e", e);
  result1.textContent = `e 사용 - 이벤트 타입 : ${e.type}, 클릭된 요소 : ${e.target.textContent}`;
});

// 2. event로 작성한 방법
btnEvent.addEventListener("click", function (event) {
  console.log("event", event);

  result1.textContent = `event 사용 - 이벤트 타입 : ${event.type}, 클릭된 요소 : ${event.target.textContent}`;
});

/* 예제 2 */
const btnA = document.getElementById("btn-A");
const btnB = document.getElementById("btn-B");
const result2 = document.getElementById("result2");
// 예제 2 : target 활용하기
// 버튼 A 를 클릭했을 때 버튼 A에 대한 요소 result2 출력
// textContent 줄바꿈 처리 방법 : /n과 <br/> 태그가 아니라\n 사용!!
//                                css로 white-space : pre-line;을 추가해야 \n이 작동한다.
btnA.addEventListener("click", function (e) {
  result2.textContent = `태그 : ${e.target.tagName},\n 
          내용 : ${e.target.textContent},\n 
          ID명칭 : ${e.target.id}, \n 
          Class명칭 : ${e.target.className}`;
});
// 버튼 B 처리
btnB.addEventListener("click", function (event) {
  result2.textContent = `태그 : ${event.target.tagName},
          내용 : ${event.target.textContent},
          ID명칭 : ${event.target.id}, 
          Class명칭 : ${event.target.className}
          `;
});

/* 
            span 태그 내부에 id 명칭 btn-C 생성
            btn-C 라는 명칭으로 span 태그를 클릭했을 때 
            span 태그의 내용, ID명칭, Class 명칭 확인 설정
        */
const btnC = document.getElementById("btn-C");
btnC.addEventListener("click", function (e) {
  result2.textContent = `태그 : ${event.target.tagName},
          내용 : ${event.target.textContent},
          ID명칭 : ${event.target.id}, 
          Class명칭 : ${event.target.className}
          `;
});

/* 예제 3 : value 활용 */
const textInput = document.getElementById("text-input");
const numberInput = document.getElementById("number-input");
const selectInput = document.getElementById("select-input");
const result3 = document.getElementById("result3");

// 텍스트 입력이 감지되었을 때 진행할 기능 설정 (자소서 작성시에나 리뷰적을 때)
textInput.addEventListener("input", function (e) {
  result3.textContent = `텍스트 입력값 : ${e.target.value}
            글자 수 : ${e.target.value.length}`; // 코딩테스트 length : 길이
});

// 숫자 입력이 감지되었을 떄 숫자 입력값과 숫자 수를 result3에 보여주기
numberInput.addEventListener("input", function (e) {
  result3.textContent = `텍스트 입력값 : ${e.target.value}
            글자 수 : ${e.target.value.length}`;
});

// select에서 선택한 옵션을 클릭해서 변경할 때 변경된 값 보여주기
selectInput.addEventListener("change", function (e) {
  result3.textContent = `선택된 값 : ${e.target.value}
          선택된 값의 글자수 : ${e.target.value.length}
          선택된 값의 순서 : ${e.target.selectedIndex}`;
});

/* 예제 4 : 종합 활용 */
const loginForm = document.getElementById("login-form");
const username = document.getElementById("username");
const userPw = document.getElementById("userPw");
const result4 = document.getElementById("result4");

loginForm.addEventListener("submit", function (e) {
  // 반드시 뒤에 소괄호 붙이기 빼고 e.preventDefault; 이렇게 작업하면 작동 안함
  /* 
    함수(=기능, 행동) 내부에 메서드(=기능, 행동)

    변수이름.메서드행동기능함수명칭() = 동사
    변수이름.명칭 = 명사
  */
  e.preventDefault(); // 실제 폼 제출 우선 멈춤!, 비밀번호 일치 확인, 아이디 중복 확인과 같이 submit 제출 버튼을 클릭해서 제출이 되기 전에 개발자가 확인해야할 사항을 확인한 수 전송하기 위해 제출 일시 정지한 상태
  result4.textContent = `사용자 이름 : ${username.value}
  사용자 비밀번호 ㅣ ${userPw.value}`;
});
