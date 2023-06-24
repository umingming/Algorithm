/*
    약수 구하기
    - 약수의 갯수가 limit을 넘으면 power로 할당
    
    1. 약수 갯수 구하는 함수 getDivisorCount 정의 num 인자
        1) count, 제곱근 변수 정의
        2) 제곱근 만큼 반복
            - num이 해당 값으로 나누어 떨어지면, count += 2
    2. for number 반복
        1) 약수 갯수 구하고 limit보다 크면 power를 result에 더하기
*/
function solution(number, limit, power) {
    let answer = 0;
    
    function getDivisorCount(num) {
        const sqrt = Math.sqrt(num);
        let count = 0;
        
        for (let i = 1; i <= sqrt; i++) {
            if (num % i === 0) {
                count += i === sqrt ? 1 : 2;
            }
        }
        return count;
    }
    
    for (let i = 1; i <= number; i++) {
        const count = getDivisorCount(i);
        answer += count > limit ? power : count;
    }
    
    return answer;
}