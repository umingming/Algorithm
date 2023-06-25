/*
    햄버거 갯수 구하기
    - 1, 2, 3이 한 세트
    
    1. pattenr 선언 /(123)/
    2. ingredient를 join해서 문자열로 만들고 pattern을 match해서 index값 찾기
    3. ingredient를 splice로 자르고, 계속 반복
*/
function solution(ingredient) {
    const pattern = /(123)/;
    let flag = true;
    let count = 0;
    
    while (flag) {
        const index = ingredient.join("").match(pattern)?.index ?? -1;
        if (index > -1) {
            ingredient.splice(index, 3);
            count++;
        } else {
            flag = false;
        }
    }
    return count;
}