$(function () {
  // 1. 타이머를 중지 시키기 위한 변수 이름 설정
  let timerInterval;
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

  // 2. 타이머 및 자동 로그아웃 기능 시작
  const sessionDuration = 60000; // 1분 (밀리초 단위)

  timerInterval = setInterval(function () {
    const now = new Date().getTime();
    const loginTime = user.loginTime; // session내에 저장된 로그인 시간 가져오기
    const elapsedTime = now - loginTime; // 현재 시간 - 로그인 하고 지난 시간 = 경과 시간
    const remainingTime = sessionDuration - elapsedTime; // 60000에서 경과시간을 빼면 남은 시간이 계산 됩니다!

    if (remainingTime > 0) {
      // 남은 시간이 존재한다면 초 단위로 변환해서 화면 표시
      const remainingSeconds = Math.ceil(remainingTime / 1000); // ceil 은 올림 함수, 남은 시간의 경우 대부분 소수점 아래 무조건 올림 함수 사용

      $("#timer").text(`${remainingSeconds}초`); // html id가 timer인 요소에 남은 시간 표시
    } else {
      //시간이 만료되면 타이머 중지 및 로그아웃
      clearInterval(timerInterval); // 기존 타이머 내용 비우기
      sessionStorage.removeItem("loggedInUser");
      alert("세션이 만료되어 자동으로 로그아웃 되었습니다.");
      window.location.href = "31_로그인.html";
    }
  }, 1000); // 1초마다 반복 시행

  // 화면에 사용자 정보 표시
  $("#user-name").text(user.name);
  $("#user-email").text(user.email);

  // 로그아웃 시에고 실행 중인 타이머 중지
  $("#logout-btn").click(function () {
    clearInterval(timerInterval); // 실행 중인 타이머 중지
    logoutFn(); // 로그아웃 기능 실행
  });
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
