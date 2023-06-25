/*
    최대 이익 구하기
    - 이익이 없을 경우 0
    
    1. scores 내림차순 정렬
    2. scores 반복하며 mn번째 있는 값들 확인
    3. 2의 값 총합 반환
*/
function solution(k, m, scores) {
    let answer = 0;
    scores.sort((a, b) => a > b ? -1 : 1);

    for (let i = 0; i < scores.length; i++) {
        if ((i + 1) % m === 0) {
            answer += m * scores[i];
        }
    }
    return answer;
}