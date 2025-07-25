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
let 주문번호 = 0; // 카운터 기능 추가

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
  // ++주문번호는 주문을 1개 추가한 상태에서 현재 주문이 어디까지 진행됐는지 바로 확인
  // 주문번호++는 주문이 추가 되기 전 상태를 확인
  orders = `${orders} ${foodName} ${price}원 * ${++주문번호} 개<br>`;
  // TODO
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

// 비밀번호 확인
function 비밀번호체크() {
  // while문으로 계속 체크, while문이 false가 될 때까지 무한 반복
  let password = document.getElementById("비밀번호입력").value;
  let 시도횟수 = 0;
  let 결과메세지 = "";

  /*
          == 양옆의 값이 일치할 경우 true
          != 양옆의 값이 일치하지 않을 경우 true
        */
  while (password != "1234") {
    // return은 모두 중지를 뜻함. return을 이용해서 false대신 while 중단가능
    console.log("while문 내부로 접속했습니다."); // console.log 개발자가 문제를 찾기위한 도구

    // 1. 비밀번호가 틀렸으면
    /*
          if (password != "1234") {
            console.log("if문 내부로 접속했습니다.");

            document.getElementById(
              "pwResult"
            ).innerHTML = `<h6>다시입력하세요.</h6>`;
          }
          */
    // 비밀번호가 틀렸을 때 새로운 비밀번호 입력받기
    /*
            prompt() 프롬프트 값을 입력할 수 있는 alert창과 같은 존재
            확인 취소 버튼 존재
          */
    password = prompt("비밀번호가 틀렸습니다. 다시입력하세요."); // prompt 입력하는 창이 나옴

    // 사용자가 비밀번호를 더이상 그만치고 싶어서 취소를 누른 경우
    if (password == null) {
      // null 사용자가 취소를 눌러서 아무값도 아닌 경우
      document.getElementById("pwResult").innerHTML =
        "로그인이 취소되었습니다.";
      return; // 더이상 아래 코드를 실행하지 않고 돌려보내기
    }
  }

  // input내부에 작성한 비밀번호가 개발자가 문제 낸 비밀번호와 일치하다면 while문을 탈출
  document.getElementById("pwResult").innerHTML = "정답입니다.";
}
