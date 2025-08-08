/*
  Error: Cannot find module 'axios'
  npm install acios 명령어를 이용해서 node_modules에 axios에 관련된 프로젝트 기능 추가
*/

const axios = require("axios");
const fs = require("fs");

// 위키백과 API 엔드포인트
const WIKI_API_URL = "https://en.wikipedia.org/w/api.php";

async function fetchWikipediaData() {
  try {
    const response = await axios.get(WIKI_API_URL, {
      params: {
        action: "query",
        format: "json",
        titles: "Computer", // 검색할 제목 (여기서는 "컴퓨터")
        prop: "extracts",
        exintro: true, // 짧은 소개 텍스트만 받기
        exchars: 1000, // 받아올 텍스트의 길이 제한
        explaintext: true, // HTML 태그 제거
      },
    });

    const page = response.data.query.pages;
    const pageId = Object.keys(page)[0];
    const title = page[pageId].title;
    const extract = page[pageId].extract;

    // JSON 형식으로 결과 저장
    const result = {
      title: title,
      extract: extract,
    };

    // 결과를 JSON 파일로 저장
    fs.writeFileSync(
      "computer_wikipedia.json",
      JSON.stringify(result, null, 2),
      "utf-8"
    );
    console.log(
      "위키백과 데이터가 computer_wikipedia.json 파일에 저장되었습니다."
    );
  } catch (error) {
    console.error("에러가 발생했습니다:", error);
  }
}

// 함수 실행
fetchWikipediaData();
