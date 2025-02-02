/*
    탐욕법
    0. index, range, scopes 선언
    1. 전파가 닿지 않는 범위 배열을 구한다.
        > stations를 반복
            > scope 구하고 0보다 클 경우 scopes에 넣는다.
            > index를 초기화
        > index가 n보다 작을 경우 그 차를 scopes에 추가
    2. scopes의 요소들을 range로 나눈 값을 더해 제출
*/

function solution(n, stations, w) {
  let index = 0;
  const range = 2 * w + 1;
  let answer = 0;

  for (const station of stations) {
    const scope = station - w - index - 1;
    if (scope > 0) {
      answer += Math.ceil(scope / range);
    }

    index = station + w;
  }

  if (index < n) {
    answer += Math.ceil((n - index) / range);
  }

  return answer;
}
