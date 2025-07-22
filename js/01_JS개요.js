/* 
    모든 js 파일명.js확장자명
        * .js 파일 내부를 script 태그 내부라고 보면 됨
    어떤 특정 js 파일 명칭인지 알 수 없으므로 * 어떠한 이라는 표기를 작성한 것임
*/

function externalFn() {
  alert("HTML 외부 파일에 작성된 externalFn() 함수 기능이 호출되었습니다.");
}

// ------- JS 맛보기
// 버튼 클릭 시 body태그의 글자색, 배경색을 변경

const body = document.querySelector("body"); // 웹 페이지 문서 내에서 바디 태그를 선택할 것(바디 태그 내 정보를 body라는 이름에 담아주기)

/* 버튼에 장착된 기능 실행하면 다크모드로 바꾸는 기능(함수) 설정 */
function darkmode() {
  body.style.color = "white"; // body 태그 안에 존재하는 스타일에서 글자 색상을 흰색으로 변경하겠다.
  body.style.backgroundColor = "black"; // body 태그 안에 존재하는 스타일에서 배경 색상을 검정색으로 변경하겠다.
}
// 버튼에 장착된 기능을 실행하면 라이트 모드로 바꾸는 기능(함수) 설정
// 글자 색상 = 검정 배경색상 = 흰색

function lightmode() {
  body.style.color = "black";
  body.style.backgroundColor = "white";
}

// 매개변수
/* 
    위 버튼에서 전달 받은 'lightblue' 컬러가 
    customColor이라는 변수이름에 담겨지고 
    담겨진 'lightblue' 는 배경색상으로 변경
*/
function bluemode(customColor) {
  body.style.backgroundColor = customColor;
}
