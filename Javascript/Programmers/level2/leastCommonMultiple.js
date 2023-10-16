/*
    최소 공배수
    
    1. 제일 큰 수의 제곱근 구하기
    2. 최소 공약수 구하기
    3. 배열의 곱셈 / (최소 공약수 * 길이 - 1) 
*/
function solution(arr) {
    const getLCM = (a, b) => {
        const min = Math.min(a, b);
        for (let i = min; i > 1; i--) {
            if ([a, b].every(num => !(num % i))) {
                return a * b / i;
            }
        }
        return a * b;
    }
    return arr.reduce((acc, cur) => getLCM(acc, cur), 1);
}