/*
    n: 진법
    t: 말할 갯수
    m: 인원
    p: 순서
    
    1. n진법 문자열을 m * t만큼 정의
        1-1. 현재 숫자 변수 정의 후, 변수의 길이가 m * t보다 작음을 조건으로 while문 반복
        1-2. 현재 숫잘르 n진법으로 바꾼 후 문자열 변수에 추가
    2. m으로 나누 나머지가 p인 인덱스만 필터링
*/
function solution(n, t, m, p) {
    let number = 0;
    let answer = "";
    
    while (answer.length < m * t) {
        answer += number.toString(n).toUpperCase();
        number++;
    }
    
    return answer.split("")
                .filter((_, index) => index % m === p - 1 && index < m * t)
                .join("");
}