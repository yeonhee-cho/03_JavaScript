/*
package.json

Node.js 에서 프로젝트의 신분증과 같은 존재 매우 중요한 설정 파일

프로젝트에 대한 모든 정보와 어떤 외부 도구(패키지)를 사용하는지가 모두 이 파일 하나에 기록됨

요리 레시피 카드 = 레시피 카드에 담긴 요리이름, 설명 필요한 재료 목록, 조리 순서가 적혀있듯이 프로젝트를 실행함에 있어 비슷한 정보가 담겨있음

{
    "name": "crawling_scraping",   -> 폴더 이름 작성(프로젝트 이름)
    "version": "1.0.0",            -> 최초 프로그램을 만들 때는 버전 1로 시작
    "description": "",             -> 우리 회사 프로젝트 설명 공간
    "main": "index.js",            -> js 파일이 여러가지가 존재하고 한 번에 실행해야 할 때 어디 js 파일을 main으로 보고 실행해야 하는가?
    "scripts": {                   -> cmd 창에서 명령어를 작성하고 수행하도록 설절하는 공간
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],                -> 우리 회사 외부에서 어떤 키워드로 검색할 것인가?
    "author": "",                  -> 프로젝트 만든이(개발회사 이름)
    "license": "ISC",              -> 프로젝트를 만듬에 있어 필요한 도구들과 도구들의 버전
    "dependencies": {              -> puppeteer 도구의 24.16.0 버전을 이용해서 프로젝트를 만듦
        "puppeteer": "^24.16.0"
    }
}

*/

// package.json은 삭제하면 안되지만 package-lock.json node_modules은 삭제 가능
// package-lock.json node_modules은 package.json만 있으면 언제든지 다시 만들기가 가능

// package-lock.json

/*
    package-lock.json
    
    package에 작성되어 있는 도구를 어디서 어떻게 가져올지에 대해 작성되어있는 목록
    node_modules 폴더에 도구를 가져올 수 있도록 경로나 버전을 기록해놓은 파일이기 때문에 잠금, 수정 x
    직접적인 수정을 할 일이 없음    
*/

// node_modules

/*
    프로젝트에 필요한 모든 외부 라이브러리들의 실제 코드가 저장되는 폴더

    npm install 명령어를 실행하면 package.json에 도구이름-도구버전이 기록되고, 기록된 경로를 
    package-lock에서 알아서 세팅, 세팅된 내용을 바탕으로 node_modules에 실제 파일들이 만들어짐
*/
