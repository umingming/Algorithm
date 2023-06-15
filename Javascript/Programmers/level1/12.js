/*
    분해한 문자열 갯수 구하기
    - 처음 문자와 동일한 것과, 아닌 것의 갯수가 같아지면 분해
    
    1. s reverse 후 chars 배열로 정의
    2. x, countX, countY, result 변수 선언
    3. while chars 길이를 조건으로 반복
        1. 글자에 해당하는 count++
        2. if 두 count가 같은지? result++, char x에 저장
    4. count 값이 다른지? result++
*/
function solution(s) {
    const chars = s.split("").reverse();
    let x, countX, countY, result = 0;
    
    const init = () => {
        x = chars.at(-1);
        countX = 0;
        countY = 0;
        if (chars.length) result++;
    }
    init();
    
    while (chars.length) {
        const char = chars.pop();
        if (char === x) countX++;
        else countY++;
        
        if (countX === countY) init();
    }
    return result;
}