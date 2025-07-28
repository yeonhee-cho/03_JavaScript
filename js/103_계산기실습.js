// const 명칭 = num1, num2, operator, calculateBtn, calcResult

// calculateBtn 클릭 이벤트 설정

// 입력값 가져오기 (숫자로 변환)
// const number1 = Number(num1.value);
// const number2 = Number(num2.value);
// const op = operator.value;

// 빈 값 체크
// if (num1.value === "" || num2.value === "") {
//     calcResult.textContent = "숫자를 입력하세요.";
//     return;
// }

// switch문으로 연산자에 따라 계산
// case "+": result = number1 + number2; break;
// case "-": result = number1 - number2; break;
// case "*": result = number1 * number2; break;
// case "/":
//     if (number2 === 0) {
//         calcResult.textContent = "0으로 나눌 수 없습니다.";
//         return;
//     }
//     result = number1 / number2;
//     break;

// 결과 출력
// calcResult.textContent = `${number1} ${op} ${number2} = ${result}`;

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const calculateBtn = document.getElementById("calculateBtn");
const calcResult = document.getElementById("calc-result");

calculateBtn.addEventListener("click", function () {
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);
  const op = operator.value;

  if (num1.value === "" || num2.value === "") {
    calcResult.textContent = "숫자를 입력하세요.";
    return;
  }

  let result;

  switch (op) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      if (number2 === 0) {
        calcResult.textContent = "0으로 나눌 수 없습니다.";
        return;
      }
      result = number1 / number2;
      break;

    default:
      break;
  }

  calcResult.textContent = `${number1} ${op} ${number2} = ${result}`;
});

// - **Number() 변환**: 문자열을 숫자로 변환
// - **select 요소**: 드롭다운에서 선택된 값 가져오기
// - **switch문**: 여러 조건을 깔끔하게 처리
// - **예외 처리**: 0으로 나누기, 빈 값 체크
