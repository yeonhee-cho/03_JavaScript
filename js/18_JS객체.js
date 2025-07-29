/* 
    JS 객체
    - {K:V, K:V, K:V, ...} 형태
    - (중요) Key는 무조건 문자열(string)
      -> "Key", 'Key', Key ("",'' 작성 안해도 JavaScript는 String으로 인식, 하지만 JAVA는 그러지 않아요...)
    - Key는 기본적으로 오름차순으로 정렬된다. (short, ASC(데이터베이스 오름차순))
*/
/* {} 객체 생성 + 다루기 */
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  // 1. 객체 생성
  // const product = {}; // 비어있는 객체 생성

  const 제품 = {
    productName: "갤럭시북4프로",
    productBrand: "samsung",
    price: 200000,
  };
  console.log("제품 : ", 제품);

  // ----------------------------------------------------
  // 2. 객체 내 Key 값을 이용해 원하는 value 얻어오기

  // 1) 객체명.key
  // 가장 많이 사용하는 방법
  console.log(
    "제품리스트 보기(더 많이 씀) : ",
    제품.productName,
    제품.productBrand,
    제품.price
  );

  console.log("------------------------------------------------");

  // 위와 동일한 역할을 하지만 위에 비하여 사용을 많이 하지 않는 방법
  console.log(
    "상품 하나의 디테일 보기 : ",
    제품["productName"],
    제품["productBrand"],
    제품["price"]
  );

  // ----------------------------------------------------
  // 2. 객체에 K:V 추가
  // Value 리터럴 값은 하나가 아닌, [] 리스트 목록 형태도 가능
  // 원하는 key를 생각해두고

  // 객체명.key = value;
  // 또는
  // 객체명["key"] = value;
  제품.color = ["black", "silver", "red"];
  console.log("제품 color 추가 : ", 제품);
  console.log("제품.color[1] : ", 제품.color[1]);

  // 제품 내에 storage 라는 key 명칭으로 값을 256GB, 512GB, 1TB 리스트 형태로 저장 후 출력
  제품.storage = ["256GB", "512GB", "1TB"];
  console.log("제품 storage 추가 : ", 제품);

  // price를 180000 18만원으로 변경
  제품.price = 180000;
  console.log("제품 price 변경 : ", 제품);

  // 4. 원하는 K:V 삭제하기 (delete 연산자 사용)
  // - delete 객체이름.key

  delete 제품.productName; // productName 삭제
  console.log("delete 후 제품 : ", 제품);
  /*
    함수 안에 메서드 존재

    함수기능은 단독으로 사용 가능
    메서드 기능은 단독으로 사용 불가 
    객체와 함꼐 사용.기능명칭()

    자바 함수 존재하지 않고 메서드가 존재
  */
});

// ==============================================================================================
/* method (메서드) */
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  const 스마트폰 = {}; // 내부가 비어있는 객체 생성

  스마트폰.모델이름 = "아이폰16프로맥스";
  스마트폰.가격 = 1000000;

  // 메서드(객체의 기능(함수)추가)
  스마트폰.정보 = function () {
    const 브랜드 = "사과";
    /* 
        this 참조 변수
        - 작성되는 위치에 따라서 의미가 다름

        ex)
        <button onclick="테스트기능(this)"> // 이때 this == 클릭된 요소(버튼)

        ex)
        객체이름.메서드이름 = function() {
            this.변수이름 = "값";
        } // 이때 this == 메서드가 작성된 객체
        */

    // this == 스마트폰을 가르킴
    console.log("모델이름 : ", this.모델이름);
    console.log("가격 : ", this.가격);
    console.log("브랜드 : ", this.브랜드); // 스마트폰.브랜드
    console.log("브랜드 : ", 브랜드);
  };
});
