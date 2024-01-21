/*
    3진법 뒤집기
    
    1. n을 3진법으로 만들고
    2. 반전하기
    3. 3진법인 수를 10진법으로 표기
*/
function solution(n) {
    const answer = n.toString(3).split("").reverse().join("");
    return parseInt(answer, 3);
}