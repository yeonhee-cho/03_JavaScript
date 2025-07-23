// 돈 빌리기
function 잔액확인하기() {
  // 1. 친구가 빌려달라는 금액 javascript에서 확인
  const n1 = document.getElementById("input1");
  const v1 = Number(n1.value);
  // 2. 만약에 친구가 빌려달라는 금액이 5000원 이상이면 잔액이 없어서 힘들 것 같아.
  // 3. 5000원 미만이면 언제까지 돌려줄 수 있는지 알려줘^^ 를 보냄
  // 4. (alert) 사용 if- else 문 사용
  if (v1 >= 5000) {
    alert("잔액이 없어서 힘들 것 같아");
  } else {
    alert("그래, 언제까지 돌려줄 수 있는지 알려줘^^");
  }
}

// 홀 / 짝 확인하기
function 홀짝기능() {
  const input = document.getElementById("input2");
  const v2 = Number(input.value);

  if (v2 % 2 == 1) {
    alert("홀수입니다.");
  } else {
    alert("짝수입니다.");
  }
}

// 주행 비용 계산하기

/*
    1. 입력된 거리를 js로 가져오기
    const 인풋3
    const amount에 value 값 저장

    3km이하 기본요금 3000원
    3km초과 10hm 이하 8000원
    10km이상 모두 20000원
    alert 주행거리 비용은 000 입니다.
*/

const 인풋3 = document.getElementById("input3");
function 주행거리계산기능() {
  const amount = Number(인풋3.value); // 형변환
  alert("amount", amount);
  if (amount <= 3) {
    alert("alert 주행거리 비용은 기본요금 3000원입니다.");
  } else if (amount <= 10) {
    alert("alert 주행거리 비용은 8000원입니다.");
  } else {
    alert("alert 주행거리 비용은 20000원입니다.");
  }
}
