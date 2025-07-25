/*
    const
    lottoResult
    lottoBtn

    id값을 이용해서
    click 기능을 눌렀을 때

    Math.floor(Math.random() * 45) + 1;

    num1 ~ num6
    난수 생성해서
    innertext로 화면 출력하기
*/

const lottoResult = document.getElementById("lottoResult");
const lottoBtn = document.getElementById("lottoButton");

lottoBtn.addEventListener("click", function () {
  //   const num1 = Math.floor(Math.random() * 45) + 1; // 0이 되지 않게!
  //   const num2 = Math.floor(Math.random() * 45) + 1; // 0이 되지 않게!
  //   const num3 = Math.floor(Math.random() * 45) + 1; // 0이 되지 않게!
  //   const num4 = Math.floor(Math.random() * 45) + 1; // 0이 되지 않게!
  //   const num5 = Math.floor(Math.random() * 45) + 1; // 0이 되지 않게!
  //   const num6 = Math.floor(Math.random() * 45) + 1; // 0이 되지 않게!
  //   lottoResult.innerText = `${num1},${num2},${num3},${num4},${num5},${num6}`;
  let result = "";
  lottoNums = 0;
  for (let i = 0; i < 6; i++) {
    const num = Math.floor(Math.random() * 45) + 1;

    if (i === 0) {
      result = num;
    } else {
      result = result + ", " + num;
    }

    // 만약에 i가 5라면 "+"를 붙여서 num 추가하기
    // if (i === 0) {
    //   result = num;
    // } else if (i === 5) {
    //   result = result + " + " + num;
    // } else {
    //   result = result + ", " + num;
    // }
  }
  lottoResult.innerText = result;
});
