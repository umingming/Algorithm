/*
    햄버거 갯수 구하기
    - 1, 2, 3이 한 세트
    
    1. pattenr 선언 /(1231)/
    2. ingredient를 join해서 문자열로 만들고 pattern을 match해서 index값 찾기
    3. ingredient를 splice로 자르고, 계속 반복
    
*/
function solution(ingredient) {
    ingredient = ingredient.join("");
    let count = 0;
    
    while (ingredient.includes("1231")) {
        ingredient = ingredient.replace("1231", "");
        count++;
    }
    return count;
}