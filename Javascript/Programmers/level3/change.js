/*
    거스름돈
    
    1. money를 오름차순 정렬한다.
    2. n + 1개의 배열을 정의한다 기본 값은 0
    3. for money 반복
        > unit부터 n까지도 반복 unit만큼 증가시키면서
        > dp[i] += dp[i - unit]
    4. dp[n] 반환
*/
function solution(n, money) {
    money.sort((a, b) => a - b);
    const dp = [1, ...Array(n).fill(0)];
    
    for (const unit of money) {
        for (let i = unit; i < n + 1; i++) {
            dp[i] += dp[i - unit];
        }
    }
    return dp[n];
}