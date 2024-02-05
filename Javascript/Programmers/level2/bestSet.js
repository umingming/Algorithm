/*
    최고의 집합
    
    1. s가 n보다 작으면 -1; 불가능
    2. s를 n으로 나눠서 나누어 떨어지면? 
        > 몫 * n 배열
    3. 안 나누어 떨어지면 나머지만큼 배열의 앞 값에++
*/
function solution(n, s) {
    if (s < n) return [-1];
    
    const quotient = Math.floor(s / n);
    const rest = s % n;
    
    if (!rest) return Array(n).fill(quotient);
    
    return Array.from({length:n}, (_, index) => {
        return index < rest ? quotient + 1 : quotient;
    }).sort((a, b) => a - b)
}