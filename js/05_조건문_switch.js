// 계절 판별 함수
function 계절체크기능() {
  const month = document.getElementById("monthSelect").value; // 인풋은 안에 넣어줘야하지만 select는 밖에 빼줘도 무관하다
  const resultDiv = document.getElementById("seasonResult");
  // value 값도 문자!!

  // 선택한 계절을 보여주기
  switch (month) {
    case "3":
    case "4":
    case "5":
      alert("봄입니다.");
      resultDiv.innerText = "봄입니다.";
      break;
    case "6":
    case "7":
    case "8":
      alert("여름입니다.");
      resultDiv.innerText = "여름입니다.";
      break;
    case "9":
    case "10":
    case "11":
      alert("가을입니다.");
      resultDiv.innerText = "가을입니다.";
      break;
    case "12":
    case "1":
    case "2":
      alert("겨울입니다.");
      resultDiv.innerText = "겨울입니다.";
      break;
    default:
      resultDiv.innerText = "올바른 월을 선택해주세요(1~12월).";
      break;
  }
}

// 커피 주문 함수
// const coffee라는 명칭으로 coffeeSelect value 값을 담아주기
// resultCoffee 라는 명칭으로 coffeeResult 요소를 담아주기
function 커피주문기능() {
  const coffee = document.getElementById("coffeeSelect").value;
  const resultCoffee = document.getElementById("coffeeResult");

  switch (coffee) {
    case "americano":
      resultCoffee.innerText = "아메리카노";
      break;
    case "latte":
      resultCoffee.innerText = "카페라떼";
      break;
    case "cappuccino":
      resultCoffee.innerText = "카푸치노";
      break;
    case "mocha":
      resultCoffee.innerText = "카페모카";
      break;
    case "macchiato":
      resultCoffee.innerText = "마키아토";
      break;

    default:
      resultCoffee.innerText = "올바른 값을 선택해주세요.";
      break;
  }
}
