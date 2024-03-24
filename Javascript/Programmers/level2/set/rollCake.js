/*
    Topping
    
    1. topping set해서 size 구하기
    2. let result 변수 선언
    3. const mySet 선언
    3. topping 길이가 size의 반절이 되는 걸 조건으로 반복
        > topping을 pop해서 mySet에 add함.
        > if mySet의 크기가 toppingSet과 같은지? 
            > result++
        > if toppingSet의 크기가 half보다 작은지?
            > return result;
*/
function solution(topping) {
    const toppingConfig = topping.reduce((acc, cur) => {
        if (!acc[cur]) {
            acc[cur] = 0;
        }
        acc[cur]++;
        return acc;
    }, {});
    
    const allSet = new Set(topping);
    const mySet = new Set();
    
    while (allSet.size > mySet.size) {
        let target = topping.pop();
        mySet.add(target);
        
        toppingConfig[target]--;
        if (!toppingConfig[target]) {
            allSet.delete(target);
        }
    }
    
    if (allSet.size === mySet.size) {
        let target = topping.pop();
        let result = 1;
        while (topping.length) {
            toppingConfig[target]--;
            if (!mySet.has(target) || !toppingConfig[target]) {
                return result;
            }
            target = topping.pop();
            result++;
        }
    } else {
        return 0;
    }
}