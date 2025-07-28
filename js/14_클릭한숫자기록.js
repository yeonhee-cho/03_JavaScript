/* 클릭한 숫자를 10글자까지만 기록하기 */

// 1-1. select all number id 모두 배열로 가져오기
const numbers = document.querySelectorAll(".number");

console.log("numbers : ", numbers);

// 1-2. id 값을 result로 가져오기
const result = document.getElementById("result");

for (let i = 0; i < numbers.length; i++) {
  /*
    아래 방법 모두 가능 / 개발자가 편한 방식으로 사용하면 됩니다.
    numbers[i].addEventListener("click", function () {
        result.textContent += e.target.textContent;
        // function 을 사용할 때는 this 사용할 수 있음
        // addEventListener 앞에 있는 numbers[i] 를 this로 대신 작성 가능

    numbers[i].addEventListener("click", () => {
        result.textContent += e.target.textContent;
        // function 이 없기 때문에 this 사용할 수 없음!!
        // addEventListener 앞에 있는 요소 명칭을 직접적으로 작성

    numbers[i].addEventListener("click", e => {
        result.textContent += e.target.textContent;
        // function 이 없기 때문에 this 사용 불가
  */
  numbers[i].addEventListener("click", () => {
    // TODO undefined 노출
    if (result.textContent.length == 10) {
      alert("10글자까지만 입력 가능합니다.");
      return;
    }

    // result.textContent = this.textContent;
    // 계속 바뀌는게 아니라 추가되어지게
    result.textContent += this.textContent;
  });
}

// 2. 초기화 버튼 클릭하면 result 내부의 값 없애기
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
  result.textContent = "";
});

// 3. numbers[i].addEventListener("click", function() {})
// 익명 함수 중 화살표 함수로 변경하기
