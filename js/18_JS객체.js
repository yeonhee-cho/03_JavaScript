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

  // 메서드 기능 수행하기
  // 어디서든 정보() 기능을 수행했을 때 내용이나 행동을 확인할 수 있는 것이 아니라 스마트폰이라는 내부에 존재하는 기능을 수행하기 위해서는 스마트폰 객체 내부에 존재하는 정보() 기능을 호출하겠다 와 같은 형식으로 사용
  스마트폰.정보(); // 여기 주석하면 콘솔이 안보임, 호출해준 것
  /*
    정규식.test("소비자가 작성한 값 확인하기") =  true / false 로 일치하는지 확인

    // 1번 방법
    정규식 = {
        test = funtion () {
            boolean 값으로 확인할 수 있는 코드 작성
        }
    }

    // 2번 방법
    정규식 = {};
    정규식.test = function() {
        boolean 값으로 확인할 수 있는 코드 작성
    }

    // 1번 방법이나 2번 방법을 활용해서 메서드를 생성하고 나면... 아래와 같이 호출
    정규식.test();

    if(개발자가원하는정규식.test(소비자가작성한값확인)){
        // 개발자가원하는정규식 == 소비자가작성한값확인
        // true 일 경우에만 실행
    }
  */
});

// ==============================================================================================

/* 생성자(Constructor) 함수 */
// 1. 생성자 함수 선언 + 정의
//    (중요) 생성자 함수의 이름은 무조건 "대문자"로 시작
//    영어 이 외에 한글 가능, 소문자도 가능하지만 대문자로 작성해주는 것이 개발자 간의 예의
//    자바에서는 대문자로 주로 사용될 것!

/* 학생 객체 생성자 함수 */
function Student(name, grade, ban, number, score) {
  // Student 같이 대문자로 사용하는 것이 좋다!! 규칙**
  // 속성
  // 전달 받은 값(parameter, 매개변수, 리터럴)을 현재 객체(this)의 속성으로 추가
  // 현재 속성에 = 값 추가
  // this.속성 = 값;

  this.name = name; // 이름
  this.grade = grade; // 학년
  this.ban = ban; // 반
  this.number = number; // 번호
  this.score = score; // 점수

  //기능(메서드)
  this.intro = function () {
    console.log(`
        ${this.grade} 학년 ${this.ban} 반 ${this.number}번 이름 ${this.name} ${score}입니다. 
        `);
  };
}

// 생성자 함수 호출
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
  const st1 = new Student("홍길동", 3, 5, 17, 80);
  console.log("st1 : ", st1);
  const st2 = new Student("박철수", 1, 2, 3, 90);
  console.log("st2 : ", st2);
});

/* JSON */
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
  // JS 객체 생성
  const obj = { id: "test01", pw: "1234", number: 9999 };

  // 1. JS 객체 -> JSON 문자열로 변환
  const str = JSON.stringify(obj);
  console.log("obj : ", obj);
  console.log("str : ", str);

  // JSON 문자열 생성
  // Uncaught SyntaxError:
  // str2 = '{ id: "test01", pw: "1234", number: 9999 }';
  /*
  const str2 = '{ id: "test01", 
  pw: "1234", 
  number: 9999 }';
  */ // Enter도 SyntaxError 날 수 있음
  // const str2 = '{ id: "test01", pw: "1234", number: 9999 }'; // VM1368:1 Uncaught SyntaxError:
  const str2 = '{ "id": "test01", "pw": "1234", "number": 9999}'; // 에러 없음!

  // 1. JSON 문자열 -> JS 객체로 변환
  const obj2 = JSON.parse(str2);
  console.log("str2 : ", str2);
  console.log("obj2 : ", obj2);

  // 서버 데이터 비동기 요청
  /*
    fetch("API_URL") : 웹 API로 HTTP 요청을 보냄
                       비동기 처리 상태로 네트워크 요청이 완료되면 Response 객체 제공
    .then((response) => response.json()) : fetch에서 URL주소로 접속해서 요청을 성공적으로 받으면 실행, 주로 URL주소에서는 JSON() 형태로 데이터 존재.
                                           이 데이터를 JSON -> JavaScript 객체로 변환
    .then((result) => result.response.데이터) : result는 변환된 JavaScript 객체 데이터가 저장이 되어있고 result 내부에 원하는 값 접근해서 원하는 데이터만 출력
    ; : 반드시 fetch .then .then 형식이 종료된 후 맨 마지막에 붙여주기. fetch; 금지 이런 식으로 하는 것은 해선 안 될 행동 

    전체 흐름
    API 요청 -> 응답받기 -> JSON변환 -> 데이터출력
    fetch       then1       then2       console.log()
  */
  fetch(
    // 공공데이터 접속을 위한 키 값
    "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=fC0CJR9Lmwp3VfoLcND3XVFDW7FKGuTMECDT6TZD3aE7q4XUVL6PYscpePWfKNMwh0p6ZUt%2FmOm5xGbckoRGCQ%3D%3D&returnType=JSON&numOfRows=100&pageNo=1&searchDate=2024-01-22&InformCode=PM10"
  )
    .then((response) => response.json())
    // .then((result) => console.log(result.response.body.numOfRows));
    .then((result) => console.log(result.response.header.resultMsg));
});
