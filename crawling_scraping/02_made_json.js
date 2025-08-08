/*
    require("파일 이름") : node_modules 중에서 fs로 지칭되어 있는 파일을 가져와서 사용
    require("fs"); Node.js 최초로 만들 때 기본적으로 내장되어 있는 기능
                   File System에 줄임말
                   파일을 다룰 때 주로 사용
    require("puppeteer"); // 인형조종사를 의미하는 단어
                             웹 브라우저를 코드(인형)처럼 조종하는 라이브러리
                             웹 사이트 접속, 버튼 클릭, 텍스트 입력, 화면 스크린 샷, HTML 정보 가져오기
                             웹브라우저 자동화와 관련된 모든 기능 사용할 수 있음
                             npm install puppeteer 명령어로 미리 설치해야지만 require로 node_modules 폴더에서
                             불러와 사용하기 가능
*/
const fs = require("fs"); // 파일 시스템 모듈
const puppeteer = require("puppeteer");

/*
    ajax = axios 와 같은 비동기 함수로 만들어주는 키워드
    async = 비동기 함수는 시간이 걸리는 작업을 기다리는 동안 다른 작업을 멈추지 않고 진행할 수 있게 해주는 특별한 함수
    
    지금은 async를 제거해도 되지만, 여러 작업을 한 프로그램 안에 실행할 때는 필요

    async - await : 
                    async : 이제부터 비동기 작업을 할거니 준비하자!
                            마치 카페에 들어가서 주문할 준비를 하는 것과 같음
                    await : 시간이 걸리는 작업이 끝날 때까지 기다리라고 지시하는 것
                            주문한 커피가 나올 때까지 진동벨을 들고 기다리는 행위와 같음
                            기다리는 동안 다른 손님은 자기 주문을 할 수 있으므로, 가게 전체가 멈출 일은 없음
                            async 내부에서만 사용 가능
                            await 를 만나는 코드는 결과 값이 완료되어 나올 때까지 함수의 실행을 일시 중지하고 기다림 
*/
async function scrapeQuotes() {
  // 1. 브라우저 실행 puppeteer.launch = 구글 크롬을 배경으로 새로운 크롬을 시작하겠다.
  // headless: "new" 웹사이트를 화면에 보이지 않는 상태에서 실행
  // headless: false 웹사이트에서 데이터 수집하는 화면을 개발자가 볼 수 있는 상태로 실행
  const browser = await puppeteer.launch({ headless: false });

  // 2. 새로운 페이지 열기 -> 웹사이트 열기 진행
  const page = await browser.newPage();

  // 3. 원하는 웹사이트로 이동
  await page.goto("http://quotes.toscrape.com/");

  // 4. 페이지의 특정 요소들을 가져오기
  const quotes = await page.evaluate(() => {
    const quoteList = [];
    const quoteElements = document.querySelectorAll(".quote");

    // forEach = map과 동일한 기능
    quoteElements.forEach((element) => {
      const text = element.querySelector(".text").innerText;
      const author = element.querySelector(".author").innerText;
      quoteList.push({ text, author });
    });

    return quoteList;
  });

  // 5. 수집한 결과를 JSON 파일로 저장
  // fs.writeFileSync() : 파일에 작성하는 작업이 순차적으로 끝날 때까지 다음작업은 시작하지 않고 기다린다.
  // .quote 내부에 작성된 데이터를 0번 부터 순차저긍로 작성하기 위해 동기작업으로 파일 쓰기를 진행
  // writeFileSync() 단순 파일 저장 작업을 할 때 주로 사용
  // writeFile() 비동기 형태로 파일 저장 수십 MB 가 넘는 큰 파일을 다룰 때는 프로그램 전체가 멈출 수 있기 때문에 비동기 방식인 writeFile() 사용

  /* 
    JSON.stringify(quotes, null, 2) 
    JSON.stringify : 객체나 배열을 문자열 형태로 변환
    quotes :  객체나 배열 대상의 자바스크립트 변수 이름에 조ㅓ장죄어 있는 목록을 파일명.json으로 저장할 목록 리스트
    null : 데이터를 문자열로 변환하기 전에 특정 규칙에 따라 값을 바꾸거나 필터링 하는 함수를 넣는 자리
           null : 아무런 작업을 하지 않고, 원본 그대로 사용하겠다는 의미
    2 :  변환된 JSON 문자열을 사람이 보기 좋게 만들어주는 들여쓰기 간격 두칸의 공백으로 들여쓰기 하라는 의미
  */
  fs.writeFileSync("quotes.json", JSON.stringify(quotes, null, 2));

  // 개발자가 크롤링 후 json으로 파일이 만들어졌는지 확인하기 위한 log 기록
  console.log("크롤링 완료 quotes.json 파일이 생성되었습니다.");

  // 6. 브라우저 닫기 = 브라우저를 닫기 싫으면 안해도 됨. 닫지 않으면 메모리 누수 발생
  await browser.close();
}

// 함수 실행
scrapeQuotes();
