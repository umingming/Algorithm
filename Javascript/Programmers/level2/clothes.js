/*
    의상 조합
    -경우의 수를 곱하고 -1
    
    1. clothes 분류해서 {종류: 갯수}로 하는 객체로 만들어 정의한다.
    2. 객체를 배열로 만들어 reduce해서 경우의 수를 조합
    3. 해당 경우의 수에서 -1해서 반환
    
*/
function solution(clothes) {
    const clothesConfig = clothes.reduce((acc, [_, type]) => {
        acc[type] = (acc[type] ?? 0) + 1;
        return acc;
    }, {}) 
    const count = Object.values(clothesConfig).reduce((acc, cur) => acc * (cur + 1), 1);
    return count - 1;
}