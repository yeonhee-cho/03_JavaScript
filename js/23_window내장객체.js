const open24Popup = document.getElementById("open_24popup");
open24Popup.addEventListener("click", () => {
  let options = [];
  options.push("width=400");
  options.push("height=600");
  // 팝업창 띄우는 위치를 지정
  options.push("left=500");
  options.push("top=100");
  // 배열 이름. toString() : "요소, 요소, 요소" 처리로
  // 배열 내 요소를 , 를 구분자로 하여 한 하나의 문자열로 변환
  window.open("24_팝업창.html", "_blank", options.toString());
  //   window.open("24_팝업창.html", "_blank");
});
