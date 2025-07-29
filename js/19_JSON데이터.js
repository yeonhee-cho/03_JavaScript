// 1. const elementById 로 모두 HTML JavaScript 연결 설정하기

const result = document.getElementById("result");
const fetchPost = document.getElementById("fetchPost");
const content = document.getElementById("content");

// html에서 button type은 submit이 아니라 button 형태로 타입 맞춰주는 것이 바람직함
fetchPost.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts/1") // API_URL
    .then((response) => response.json()) // response는 줄여서 res라고도 함, json 형태로 변환, parse() 메서드와 json() 메서드 차이 확인
    .then((data) => {
      // innerHTML= <> 태그 적용 innerTEXT = <>태그도 텍스트로 출력
      content.innerHTML = `
      <strong>userID : </strong> ${data.userId}<br>
      <strong>Id : </strong> ${data.id}<br>
      <strong>Title : </strong> ${data.title}<br>
      <strong>Body : </strong> ${data.body}<br>
      `;
    }); // data라는 이름으로 많이 쓰임
});
