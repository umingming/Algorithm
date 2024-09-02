/*
    1. 최소 공배수 구하는 함수 정의
    2. 내림차순으로 배열 정렬
    3. 배열을 reduce로 순회하며, 1의 함수를 결과값으로 보냄
*/

function solution(arr) {
    arr.sort((a, b) => b - a);
    return arr.reduce((acc, cur) => getLCM(acc, cur), 1)
}

/*
    최소 공배수: a * b / 최대 공약수
*/
function getLCM(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    return a * b / getGCD(max, min);
}


function getGCD(max, min) {
    return max % min === 0 ? min : getGCD(min, max % min);
}