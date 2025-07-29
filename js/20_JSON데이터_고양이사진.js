// 1. const elementById 로 모든 HTML JavaScript 연결 설정하기
const randomCat = document.getElementById("randomCat");
const result = document.getElementById("result");
const content = document.getElementById("content");

randomCat.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      console.log("data : ", data);

      /*
        데이터가 중괄호가 아닌 [] 괄호 형태로 시작하면 대부분 배열, 리스트 목록 형태의 데이터 data를 활용할 때는 data[0] 가져오고 싶은 index를 사용
        [
            {
            "id": "e46",
            "url": "https://cdn2.thecatapi.com/images/e46.jpg",
            "width": 600,
            "height": 430
            }
        ]
      */
      content.innerHTML = `
      <strong>Id : </strong> ${data[0].id}<br>
      <strong>URL 주소 확인 : </strong> ${data[0].url}<br>
      <strong>이미지 확인 : </strong> <img src="${data[0].url}" alt ="고양이 이미지" class="cat-image"><br>
      <strong>Width : </strong> ${data[0].width}px<br>
      <strong>Height : </strong> ${data[0].height}px<br>
      `;
    });
});
