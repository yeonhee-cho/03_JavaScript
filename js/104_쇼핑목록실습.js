// const 명칭 = itemInput, addBtn, shoppingList

// 쇼핑 목록을 저장할 배열
// const items = [];

// 상품 추가 함수
// function addItem() {
//     const itemName = itemInput.value.trim();

//     빈 값 체크
//     if (itemName === "") {
//         alert("상품명을 입력하세요.");
//         return;
//     }

//     배열에 상품 추가
//     items.push(itemName);

//     화면에 목록 표시
//     let listText = "🛒 쇼핑 목록:\n\n";
//     for (let i = 0; i < items.length; i++) {
//         listText += `${i + 1}. ${items[i]}\n`;
//     }
//     shoppingList.textContent = listText;

//     입력창 비우기
//     itemInput.value = "";
//     itemInput.focus();
// }

// 버튼 클릭 이벤트
//

// 엔터키 이벤트
// itemInput.addEventListener("keyup", function(e) {
//     if (e.key === "Enter") {
//         addItem();
//     }
// });

const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const shoppingList = document.getElementById("shopping-list");

const items = [];

function addItem() {
  const itemName = itemInput.value.trim();

  //  상품명 입력 전 이벤트 시
  if (itemName === "") {
    alert("상품명을 입력하세요.");
    return;
  }

  // 배열에 상품 추가
  items.push(itemName);

  // 화면에 목록 표시
  let listText = "🛒 쇼핑 목록:\n\n";
  /*
  for (let i = 0; i < items.length; i++) {
    listText += `${i + 1}. ${items[i]}\n`;
  }
  */
  // for문을 while문으로 바꿀경우
  let i = 0; // 초기 조건식을 빼주기
  while (i < items.length) {
    listText += `${i + 1}. ${items[i]}\n`;
    i++;
  }

  shoppingList.textContent = listText;

  // 입력창 비우기
  itemInput.value = "";
  itemInput.focus();
}

// 버튼 클릭 했을 경우
addBtn.addEventListener("click", addItem);

// input에서 enter 눌렀을 경우
itemInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});

// - **배열 활용**: 데이터를 배열에 저장하고 관리
// - **for문**: 배열을 순회하며 목록 생성
// - **trim() 메서드**: 공백 제거
// - **함수 분리**: 재사용 가능한 함수 만들기
// - **focus() 메서드**: 입력창에 포커스 주기
