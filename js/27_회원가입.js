const idCheck = document.getElementById("idCheck");
// 팝업 사이즈 450 * 200 화면 가운데 위치
const width = 450;
const height = 200;
const left = (window.screen.width - width) / 2;
const top = (window.screen.height - height) / 2;

idCheck.addEventListener("click", () => {
  const options = `
    width = ${width},
    height = ${height},
    left = ${left},
    top = ${top},
    `;
  // 팝업
  window.open("28_아이디중복확인.html", "_blank", options.toString());
});
