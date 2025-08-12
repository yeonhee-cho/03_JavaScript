$(function () {
  // session Storage 에서 로그인 정보 가져오기
  const 세션로그인유저 = sessionStorage.getItem("loggedInUser");

  // 로그인 정보가 없으면 로그인 페이지로 보내기

  if (!세션로그인유저) {
    // !세션로그인유저 = 로그인된 유저가 없는게 true라면
    alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
    window.location.href = "31_로그인.html";
    return; // if 문 아래 기능들 실행하지 못하도록 돌려보내기
  }

  // 유저가 존재한다면 유저 정보를 문자열에서 객체로 변환
  let user = JSON.parse(세션로그인유저);
  console.log("user : ", user);

  // 화면에 사용자 정보 표시
  $("#user-name").text(user.name);
  $("#user-email").text(user.email);
  $("#logout-btn").text(logoutFn);
});

/*
글자형식 : name:"홍길동",email:"hong@email.com"을 
JSON.parse를 이용해서 변환

👤
name : 홍길동
email : hong@email.com
*/

// 로그아웃 버튼 클릭
function logoutFn() {
  sessionStorage.removeItem("loggedInUser"); // 세션로그인유저에 작성된거! 넣어주기
  alert("로그아웃 되었습니다.");
  window.location.href = "31_로그인.html";
}
