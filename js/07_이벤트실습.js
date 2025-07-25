/* 입력한 색상으로 배경색 변경하기 */
const box3 = document.getElementById("box3");
const input3 = document.getElementById("input3");
const btn3 = document.getElementById("btn3");

/* #btn3를 클릭했을 때 */
btn3.addEventListener("click", function () {
  box3.style.backgroundColor = input3.value;
});
input3.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    box3.style.backgroundColor = input3.value;
  }
});

/* 입력한 색상으로 box4 와 버튼 배경색상 변경하기 */
const box4 = document.getElementById("box4");
const input4 = document.getElementById("input4");
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function () {
  box4.style.backgroundColor = input4.value;
  btn4.style.backgroundColor = input4.value;
});
