function plusFn() {
  // 변수 선언
  // document(문서) : HTML 문서(파일) 내에서
  // get : 가져오다, 얻다
  // Element : HTMLdyrh
  // ById : 아이디가 일치하는

  // -> html문서 내에서 ()내 아이디가 일치하는 요소를 얻어오겠다.
  const number1 = document.getElementById("input1").value;
  // HTML 문서 내에서 가져오겠다 태그(요소) id값(인풋1) 내에서 작성한 값

  const number2 = document.getElementById("input2").value;

  // 글자와 숫자 사이에 + 를 작성하면 더하기가 아니라 이어 붙이기가 됨
  // 코드를 실행하는 중간에 문제가 발생하면
  // 문제를 건너뛰어서 다른 것을 실행하는 것이 아니라
  // 문제가 발생한 지점에서 실행 멈춤
  console.log("number1의 값 : " + number1);
  console.log("number2의 값 : " + number2);

  /* 
    input요소에 작성된 값은 무조건 문자열(string) 형태라서 더했을 때 이어쓰기 되는 문제가 발생한다.

    [해결 방법]
    문자열(string)을 숫자(number)로 변경하는 방법을 수행
    데이터 파싱(data parsing) : 데이터의 종류를 바꿈

    숫자만 작성된 문자열("123")을 진짜 숫자(123)으로 바꾸는 방법
    Number("123") -> 숫자 123으로 변경
  */
  alert("두 수의 합 : " + number1 + number2); // 숫자로 변환되지 않음
  alert("두 수의 합 : " + Number(number1) + Number(number2)); // 숫자로 변환되지 않음
  alert(Number(number1) + Number(number2));

  /* 
    두 수의 합을 id가 "계산 결과"인 요소(결과 변수)의 내부글자(innerText, HTML요소 내용)로 대입하기 
  */
  // 1번 html코드 안에서 <> 태그 내부 id값으로 calcResult가 작성된 태그 찾기
  // 1번 답: document.getElementById("계산 결과")

  // 2번 찾은 태그를 const result 라는 변수이름으로 값 담아주기
  // 2번 답: const result = document.getElementById("계산 결과").value;

  // 3번 result.innerText로 수의 합을 저장해서 사용자 화면에 보여주기

  // result 뒤에는 소비자가 작성한 계산 값이 아니라, 우리가 더해준 계산 결과가 들어가야하기 때문에 .value 를 붙여주지 않음
  // 계산결과
  const result = document.getElementById("calcResult");
  result.innerText = Number(number1) + Number(number2);
}
