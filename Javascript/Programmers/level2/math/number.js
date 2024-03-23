/*
    정수인 점의 개수 구하기
    - 원 위의 점도 포함
    - 8 -> 16 -> 24
    
    1. for r1 ~ r2
     1) i * 8 누적
    2. + 4 반환
*/
function solution(r1, r2) {
    let answer = 0;
    
    for (let i = 0; i < r2; i++) {
        const max = Math.floor(Math.sqrt(r2 ** 2 - i ** 2));
        const min = Math.ceil(Math.sqrt(r1 ** 2 - i ** 2)) || 1;
        
        answer += 4 * (max - min + 1)
    }
    return answer;
}