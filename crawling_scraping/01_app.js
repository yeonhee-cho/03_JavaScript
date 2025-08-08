// 01_app.js 실행 방법
// node 01_app.js
// node_modules 폴더는 깃허브에 안올린다.
// .ignore -> 깃허브에 올리지 말아야할 파일 목록들 작성하는 공간
// 이 파일 안에 node_modules/* 를 작성하면 node_modules 폴더 안에 있는 모든 파일 깃허브에 안올라감

/*
  /robots.txt -> 다운로드 되거나 웹페이지로 보여짐
                 도메인 회사마다 형식 다름

  네이버
  https://www.naver.com/robots.txt

  모든 도메인 주소 뒤에 /robots.txt 를 작성하면 특정 도메인에서 어느 범위까지 데이터 수집허용이 가능한지 나옴

  User-agent: *
                   모든 유저들은
  Disallow: /
                  이 웹사이트의 어떤 페이지도 크롤링을 하지 마시오. 가장 강력한 차단 명령어
  Allow : /$
                  규칙에 대한 예외
  Allow : /.well-known/privacy-sandbox-attestations.json
                  단, 위 파일 하나는 크롤링 허용

  https://www.naver.com/.well-known/privacy-sandbox-attestations.json

  지마켓
  https://www.gmarket.co.kr/robots.txt

  User-agent: *
                   모든 유저들은
  Disallow: /
                  이 웹사이트의 어떤 페이지도 크롤링을 하지 마시오. 가장 강력한 차단 명령어

  User-agent: GoogleBot
  User-agent: BingBot
  User-agent: Yeti
  User-agent: Daumoa
  User-agent: Twitterbot
  User-agent: GPTBot
  User-agent: AdsBot-Google
  User-agent: Ads-Naver
                  로봇들은 데이터 수집 허용
  Crawl-delay: 1
                  로봇들이 데이터를 수집할 때는 서버에 부담을 주지 않도록 최소 1초의 간격을 두어라
  Allow: /n
  Allow: /e
                  /n으로 시작하거나 /e로 시작하는 특정 페이지는 허용 가능
  User-agent: GoogleOther
  Disallow: /n

  User-agent: facebookexternalhit
  Allow: /
  User-agent: facebookcatalog
  Allow: /
*/

console.log("안녕하세요 NodeJs 실행 됐습니까? 백엔드로 실행되나요?");

console.log("현재 시간 : ", new Date());

// 반복문 해보기
for (let i = 0; i <= 5; i++) {
  console.log(`${i} 번째 출력`);
}
