/*
    주문 추가 기능을 이용해서 switch case문으로 주문 완료
    let orders; 라는 명칭으로 주문 담을 것

    id = "menuSelect"
    const를 이용해서 아이디 값 가져오기
*/
// ---------------------------------

/*
    id 위치(요소 나 태그)를 바라보거나, 
    value 값을 확인할 때는 let 보다 const를 사용하는 것이 바람직함
*/
/*
    let orders; // let orders 내부에 값이 존재하지 않기 때문에
    let order = ""; // 밖으로 쓰기

    함수완료기능() {
        let orders = ""; // 안에서 쓰면 계속 초기화 됨
    }
*/
let orders = ""; // "" 넣어주기

function 주문추가기능() {
  const menu = document.getElementById("menuSelect").value;
  // 고객이 원하는 메뉴를 주문하는 것은 다양한 선택지가 존재하기 때문에 let을 사용하는 것
  let foodName, price;

  switch (menu) {
    case "1":
      foodName = "피자";
      price = 15000;
      break;
    case "2":
      foodName = "치킨";
      price = 18000;
      break;
    case "3":
      foodName = "햄버거";
      price = 8000;
      break;
    case "4":
      foodName = "음료";
      price = 3000;
      break;

    default:
      alert("선택 후 주문해주세요.");
      break;
  }

  // 주문 추가
  // orders = orders + foodName + price + "원<br>";
  // -> 백틱 형태로 감싸서 ${변수이름} 변경
  orders = `${orders} ${foodName} ${price}원<br>`;

  // 주문에 대한 결과를 화면에 보여주기
  document.getElementById("menuResult").innerHTML = orders;
  /* 
  document.getElementById("menuResult").innerHTML = `
  <h3>주문목록</h3>
  ${foodName}
  <p>${price}원</p>
  <hr>
  `;
  */
}

// 주문 초기화 기능
/*
    orders, innerHTML , value 빈 값 처리 
*/
// 전체 form 처리 후 버튼 타입 reset으로 바꿔도 됨
function 주문초기화기능() {
  orders = "";
  document.getElementById("menuResult").innerHTML = "";
  document.getElementById("menuSelect").value = "";
}

function 주문완료기능() {
  // 만약에 orders가 빈값이라면 alert "주문한 메뉴가 없습니다." 띄우기
  // 주문이 존재한다면 alert "주문이 완료되었습니다." 띄우기
  if (orders == "") {
    alert("주문한 메뉴가 없습니다.");
  } else {
    alert("주문이 완료되었습니다.");
  }
  // NOTE ctrl + space : 코드 찾을 때 좋아요!
  // 주문을 완료하고 orders 비우기
  주문초기화기능();
}
