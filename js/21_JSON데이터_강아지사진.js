// 1. const elementById 로 모든 HTML JavaScript 연결 설정하기
const randomDog = document.getElementById("randomDog");
const content = document.getElementById("content");

randomDog.addEventListener("click", () => {
  // 로딩 넣어주기
  content.innerHTML = '<div class="loading"> 귀여운 강아지를 찾는 중... </div>';

  fetch("https://api.thedogapi.com/v1/images/search") // 패치
    .then((response) => response.json())
    .then((data) => {
      console.log("data : ", data);

      content.innerHTML = `
      <strong>Id : </strong> ${data[0].id}<br>
      <strong>URL 주소 확인 : </strong> ${data[0].url}<br>
      <strong>이미지 확인 : </strong> <img src="${data[0].url}" alt ="고양이 이미지" class="dog-image">
      `;
    });
});

/** "TODO" 코드를 작성해야하거나, 코드 설명, 코드 내용 포함 주석
 *
 * parse() json() 메서드 차이!
 *
 * JSON.parse() // 코드 안에서 쓸 때
 * JavaScript의 내장 메서드
 * JSON 문자열을 JavaScript 객체로 변환
 * 동기적 처리
 *
 * response.json()  // 주소 안에서 쓸 때
 * FetchAPI의 Response 객체 메서드
 * URL 응답 본문을 JSON으로 받아 JavaScript 객체로 변환
 * 비동기적 처리
 *
 *
 * 동기와 비동기
 * 동기 : 은행 번호표 업무처럼 순차적으로 시작하고 종료
 *        직렬 업무 형태
 * 비동기 : 카페 주문 같이 카페 주문을 먼저 했지만 뒤에 있는 사람의 음료가 먼저 나오기도 함
 *          카페주문을 기다리며 다른 업무를 할 수 있음
 *          병렬 업무 형태
 *
 */
