/*
    주식 가격
    
    1. prices의 크기와 동일한 배열 result 선언, 값은 n -> 0
    2. while prices 조건으로 반복
        > prices.pop한 값 선언
        > for let i = 0; i < result
            > prices[i] 값이 price보다 클 때 result 재정의
*/
function solution(prices) {
    const {length} = prices;
    const result = Array.from({length}, (_, index) => length - index - 1);
    
    while (prices.length) {
        const price = prices.pop();
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] > price) {
                result[i] = prices.length - i;
            }
        }
    }
    
    return result;
}