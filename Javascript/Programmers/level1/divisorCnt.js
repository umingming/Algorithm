/*
    left~right 수들의 약수의 갯수 구하기
    
    1. 약수의 갯수 구하는 함수 정의
    2. for left 부터 right 반복
        1) 약수 갯수가 홀수면 -, 짝수면 +
*/
function solution(left, right) {
    let answer = 0;
    const getDivisorCnt = (num) => {
        const sqrt = Math.sqrt(num);
        let cnt = +!(num % sqrt);
        for (let i = 1; i <= sqrt; i++) {
            if (!(num % i)) cnt += 2;
        }
        return cnt;
    }
    
    for (let i = left; i <= right; i++) {
        const flag = +!(getDivisorCnt(i) % 2) || -1;
        answer += (flag * i);
    }
    return answer;
}