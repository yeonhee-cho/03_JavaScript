// 두 수가 같은지 비교
// 1. cv1 변수이름에 comValue1을 바라보는 요소 설정
const cv1 = document.getElementById("comValue1");
// 2. cv2 변수이름에 comValue2을 바라보는 요소 설정
const cv2 = document.getElementById("comValue2");
// 3. result1 변수 이름에 result1을 바라보는 요소 설정
const result1 = document.getElementById("result1");

function 비교기능1번() {
  // 4. 비교기능1번() 기능 내부에서 cv1과 cv2의 value 값을 가져오는 v1 v2 변수이름 설정
  const v1 = Number(cv1.value); // == 이기 때문에 cv1.value도 가능
  const v2 = Number(cv2.value); // == 이기 때문에 cv1.value도 가능

  // 5. innerText로 (v1 = v2) 값이 같을 경우 다를경우 결과 확인
  result1.innerText = v1 == v2;
  /* 
      == (equal): 동등비교, 두 자리 이상의 값이 다른지 같은지에 대해서 비교
                  오직 값만 비교
                  자료형이 다르더라도 암묵적으로 형변환을 하여 비교
      === (strict equal): 두 자리 이상의 값들이 값과 자료형 모두 일치하는지 비교
                          형변환을 하지 않고, 엄격하게 일치하는지 판단

      '5' == 5 // true 문자열 5가 숫자 5로 변환되어 비교됨
      '5' === 5 // false 자료형이 다르므로 false
  */
}
