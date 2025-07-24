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

  let coffeeName;
  // let price;
  // let description;
  let price, description;

  // NOTE 한 줄 삭제. Ctrl + Shift + K
  switch (coffee) {
    case "americano":
      coffeeName = "아메리카노";
      price = "2,000원";
      description = "깔끔하고 진한 맛의 기본 커피";
      break;
    case "latte":
      coffeeName = "카페라떼";
      price = "3,500원";
      description = "부드러운 우유 거품이 들어간 커피";
      break;
    /*
        1. 카푸치노 3,800원
        2. 모카 4,200원
        3. 마키아토 4,000원
    */
    case "cappuccino":
      coffeeName = "카푸치노";
      price = "3,800원";
      description = "진한 에스프레소와 우유 거품의 조화";
      break;
    case "mocha":
      coffeeName = "카페모카";
      price = "4,200원";
      description = "달콤한 초콜릿이 들어간 커피";
      break;
    case "macchiato":
      coffeeName = "마키아토";
      price = "4,000원";
      description = "카라멜 시럽이 들어간 달콤한 커피";
      break;

    default:
      coffeeName = "이름 정보 없음";
      price = "가격 정보 없음";
      description = "설명 정보 없음";
      break;
  }
  /*
    ${} 템플릿 리터럴
    변수 삽입 문법
    ES6 부터 제공되는 문법
    ``(백틱, 역 따옴표) 안에서 사용하고자 하는 
    변수를 작성할 때 ${} 매부에 변수이름 작성
  */
  // 커피를 선택하지 않은 경우
  if (!coffee) {
    resultCoffee.innerHTML = "커피가 선택되지 않았습니다. 다시 선택해주세요!";
    return;
  }

  // resultCoffee.innerText = "주문하신" + coffeeName + "는" + price + "입니다.";
  // resultCoffee.innerText = `주문하신 ${coffeeName}는 ${price}입니다.`;

  resultCoffee.innerHTML = ` <p>
      ☕ ${coffeeName}<br>
      💰 가격: ${price}<br>
      📝 설명: ${description}
    </p>`;
}
