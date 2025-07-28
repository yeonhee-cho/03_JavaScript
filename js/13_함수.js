/* 매개 변수, 전달 인자 */
// const input1 = document.querySelector("#input1");
// const btn1 = document.querySelector("#btn1");
// querySelect -> #을 작성하지 않아도 되는 매서드 교체
const input1 = document.getElementById("input1");
const btn1 = document.getElementById("btn1");

// btn1 클릭시 #input1의 값을 읽어와 print1()함수 호출

// 자주 사용하는 기능을 분리해서 기능 명칭으로 사용할 수 있다.
function print1(num, str) {
  alert(`${num} 은/는 ${str} 입니다.`);
}

/*
      전달 할 때
      print(전달할 변수 이름1, 전달할 변수 이름2)

      내용 적용
      print1(변수이름1,변수이름2){
        변수이름1을 넣을 공간
        변수이름2을 넣을 공간
      }
      */

btn1.addEventListener("click", function () {
  const value = input1.value;

  // input1에 값이 입력이 안되었거나, 빈칸만 입력된 경우
  if (value.trim().length == 0) {
    // console.log("숫자를 입력해주세요."); // console.log(); -> 개발자가 문제를 확인하는 수단
    // 소비자가 문제를 확인할 수 있도록 변경 -> alert
    alert("숫자를 입력해주세요.");
    return; // 함수 종료 + 호출한 곳으로 돌아감
  }
  console.log("return이 여기까지 오는지 확인");

  let result;
  /*
        if (Number(value) == 0) {
          result = "0";
        } else if (Number(value) > 0) {
          result = "양수";
        } else {
          result = "음수";
        }
        */
  //  result 하나씩일 경우 아래처럼
  // 중괄호 생략가능
  if (Number(value) == 0) result = "0";
  else if (Number(value) > 0) result = "양수";
  else result = "음수";

  /* 함수 호출(값 전달) */
  /* [!! 중요 !!] 전달되는 값의 순서가 중요하다 */
  print1(value, result);
  print1(result, value); // 순서를 반대로 적용
});

/* return (반환) */
const btn3a = document.getElementById("btn3a");
btn3a.addEventListener("click", function () {
  const numbers = []; // new Array 혹은 [1,2] 이런식으로 작성 가능
  numbers[0] = 30;
  numbers[2] = 10;
  console.log(numbers);

  // 배열.push(값) : 배열의 마지막요소로 값을 추가
  numbers.push(30); // index 두 번째 자리 다음에 30이 추가
  console.log(numbers);

  numbers.push(pow(2, 4)); //== numbers.push(16), 2의 4승(2x2x2x2)
  // push나 numbers[인덱스번호]를 이용해서 값을 추가할 때 함수로 만든 기능을 활용새거 숫자나 글자를 추가할 수 있다.
});

// 전달 받은 수를 x 곱해서 반환하는 방식
function pow(num, x) {
  let result = 1; // 곱했을 때 결과에 영향을 주지 않기 위해 1 초기화

  for (let i = 0; i < x; i++) {
    result *= num;
  }
  return result;
}

/* 화살표 함수 */
// 클래스가 arrow 인 요소를 모두 가져오기 (배열 Array 형태로 확인할 것)
const arrowList = document.querySelectorAll(".arrow");
console.log("arrowList 확인 : ", arrowList);

/* 화살표 함수 기본 형태 */
arrowList[0].addEventListener("click", () => {
  alert("화살표 함수 기본 형태 실습");
});

/* 매개 변수가 1개인 경우, () 생략 가능 */
// 현재 자동 완성 정렬으로 () 없이 e만 작성되진 않음...
arrowList[1].addEventListener("click", (e) => {
  // e : 이벤트 객체(모든 이벤트 관련 정보가 담겨 있는 객체)
  // e.target : 이벤트가 발생한 요소
  e.target.style.backgroundColor = "hotpink";
});

/* return 한 줄만 작성된 경우 */
arrowList[2].addEventListener("click", (e) => {
  const input1 = Number(prompt("첫 번째 값 "));
  const input2 = Number(prompt("두 번째 값 "));

  alert(input1 + input2);
});

/* return 한 줄인데 object 반환하는 경우 */
