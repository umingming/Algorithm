/*
    1. 스티커 길이 확인
    2. 첫 번째 스티커 뗀 경우, 두 번째 스티커 뗀 경우 나눠서 배열 선언
        > 요소 초기화
    3. 2부터 반복
        > 해당 번째 스티커를 뗄지 말지,,,
    4. 최대값 리턴
*/
function solution(sticker) {
  const { length } = sticker;
  if (length === 1) {
    return sticker[0];
  }

  const dp1 = Array(length - 2).fill(0);
  const dp2 = Array(length - 2).fill(0);

  // 첫 번째 스티커 뗀 경우
  dp1[0] = sticker[0];
  dp1[1] = sticker[0];
  // 두 번째 스티커 부터 뗀 경우
  dp2[1] = sticker[1];

  for (let i = 2; i < length; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }

  return Math.max(dp1[length - 2], dp2[length - 1]);
}
