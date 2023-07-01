/*
    빈 병으로 몇 개의 콜라를 받을 수 있는지 구하기
    - a개 미만이면 콜라를 받을 수 없음.
    - n을 a로 나눈 몫과 나머지를 분리. 몫 * b + 나머지를 또 나눔.
    
    1. count 정의
    2. while문 사용, 조건은 n > a보다 큰지
        1) cola에 n / a * b 값 할당
        2) n에 cola + n % a 할당
*/
function solution(a, b, n) {
    let count = 0;
    
    while (n >= a) {
        const cola = Math.floor(n / a) * b;
        n = cola + n % a;
        count += cola;
    }
    
    return count;
}