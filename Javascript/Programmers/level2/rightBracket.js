/*
    올바른 괄호
    
    1. s를 쪼개서 brackets에 담고, 보관을 위한 queue 정의
    2. if 0번째 요소가 (이고, 마지막 요소가) 아닌지? return false
    3. while brackets의 크기가 0보다 크다를 조건으로 반복
        > bracket을 pop해서 나온 요소가 ")"이면 queue에 추가
        > "("이면 queue를 pop();
            > queue가 0이면 return false;
    4. queue가 0인지 반환
*/
function solution(s) {
    const queue = [];

    if (s[0] !== "(" || s[s.length - 1] !== ")") return false;
    if (s.match(/[(]/g).length !== s.length / 2) return false;
    
    for (const bracket of s) {
        if (bracket === "(") {
            queue.push(bracket);
        } else if (!queue.length) {
            return false;
        } else {
            queue.pop();
        }
    }
    
    return !queue.length;
}