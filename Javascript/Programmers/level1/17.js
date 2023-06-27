/*
    햄버거 갯수 구하기
    - 1, 2, 3이 한 세트
    
    1. pattenr 선언 /(1231)/
    2. ingredient를 join해서 문자열로 만들고 pattern을 match해서 index값 찾기
    3. ingredient를 splice로 자르고, 계속 반복
    
*/
function solution(ingredient) {
    const store = [];
    const count = ingredient.reduce((acc, cur) => {
        store.push(cur);
        if (store.slice(-4).join("") === "1231") {
            store.pop();
            store.pop();
            store.pop();
            store.pop();
            acc++;
        }
        return acc;
    }, 0)
    return count;
}