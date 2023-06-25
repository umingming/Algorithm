/*
    음식의 배치 문자열로 나타내기
    - 0번째 요소는 항상 1임.
    
    1. food 1번째 요소부터 짝수로 만들기
    2. 1번째 요소부터의 총합을 길이로 하는 배열 선언
    3. food 반복하며, 해당 index를 채우기
*/
function solution(food) {
    food = food.slice(1).map(i => i = Math.floor(i / 2));
    const positions = new Array(food.reduce((acc, cur) => acc + cur, 0));
    food.reduce((acc, cur, i) => {
        positions.fill((i + 1), acc, acc + cur);
        return acc + cur;
    }, 0)
    return `${positions.join("")}0${positions.reverse().join("")}`;
}