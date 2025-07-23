// 변수 선언
/* 
    document(문서) : HTML 문서 파일 안에서 존재하는 메서드 기능들 중에서 . 이 항목을 선택하겠다.
    getElementById : 함수 안에서 메서드 기능으로 document를 사용해야만 호출할 수 있는 기능으로 
                     이 기능의 역할은 Element = 요소, 태그 내부에 존재하는 것들 중에 개발자가 원하는 아이디 값이 들어있는 요소 태그의 값을 가져오겠다.
    ("아이디 명칭") : 요소 태그 내부에서 <input id ="아이디 명칭">으로 존재하는 태그 내부에 요소를 바라보겠다.

            .value    바라만 보는 상태에서 input 내부에 클라이언트(소비자)가 작성한 값을 가져오기 위해서 value를 사용
                      value로 마찬가지로 하위 기능이기 때문에 단독으로 사용 불가능
                      주로 html 내부에 존재하는 값을 가져올 때 사용하는 명칭
*/

// 대소문자 구분할 경우
const ABC = "알파벳 ABC 대문자";
const abc = "알파벳 abc 소문자";

console.log(ABC); // 알파벳 대문자
console.log(abc); // 알파벳 소문자

/*
    대문자로 변수 이름을 작성할 경우에는 상수하는 의미로 개발자들 간의 약속
    DB연결, Email 아이디 인증키와 같은 설정은 대문자로 작성

    개발자, 소비자가 작성한 값을 주고 받는 역할을 하는 변수 명칭은 소문자로 작성
*/

// 함수 내부에서 공통으로 사용하는 변수명칭은 맨 위에 작성

// script가 포함된 HTML문서 내부에서 input1이라고 작성된 id를 포함한 태그를 바라보겠다 설정
const num1 = document.getElementById("input1");
const num2 = document.getElementById("input2");
const result = document.getElementById("calcResult"); // 계산결과

function minusFn() {
  /* 
      value의 값은 반드시 function 기능 내부에서 가져오기를 작성해야함
      왜냐하면 HTML 화면이 보여지는 순간 value의 기본 값은 0
      우리가 원하는 value값은 소비자가 작성한 값을 원하는 것이기 때문에 마이너스 버튼을 클릭하기 전까지 소비자가 value 값을 작성할 시간을 주어야함
      소비자가 작성을 모두 완료했다면 원하는 계산기 버튼을 클릭해서 계산 결과값을 확인할 수 있도록 해야 함
  */
  // const value1 = document.getElementById("input1").value;
  const value1 = num1.value; // 위에서 value를 넣어주면 값이 안들어감
}
