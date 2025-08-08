/*
    특정 패키지(라이브러리)를 설치
    nodejs.com에 업로드 되어 있는 패키지 중에서
    현재 회사에서 필요한 패키지를 설치
    npm(기본 모델) -> yarn(페이스북에서 개발한 npm 에 빠른 버전)


    패키지를 설치하기 위해서는 초기 세팅이 필요

    1. 초기 세팅하는 방법
    npm init = 설치를 진행하며 패키지 이름, 버전, 설명을 모두 개발자가 하나하나 작성

    npm init -y = npm init으로 설치할 때 나오는 모든 질문에 미리 네라고 자동응답하는 옵션
                  (예스! 알아서 다 만들어주세요! 의 느낌)

    만약에 npm init에서 -y를 붙이지 않았을 경우
    패키지 이름은 무엇인가요? (package name:)
    버전은 무엇인가요? (version:)
    설명은 어떻게 되나요? (description:)
    진입점(메인 파일)은 무엇인가요? (entry point:)
    테스트 명령어는요? (test command:)
    Git 저장소는요? (git repository:)
    키워드는요? (keywords:)

*/

/*
    도구가 txt 파일이냐 한글 파일이냐 와 같은 차이
    cmd = command prompt : 텍스트 기반 간단한 파일 관리, 기본적인 네트워크 명령어

    powershell : 편집가능한 디지털 파일을 다루는 최신 오피스
*/
// node index.js
console.log("--- index.js 파일 실행하기 --- ");
