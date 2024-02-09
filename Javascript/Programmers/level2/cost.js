/*
    주식 가격
    
    1. prices를 map한다; 인자는 (price, i)
        > findIndex로 index 구한다; newPrice, j
        > i < j, price > newPrice
        > index가 있으면 index - i, 없으면 length - i
        
*/
function solution(prices) {
    const results = [];
    
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        let result = 0;
        for (let j = i + 1; j < prices.length; j++) {
            result++;
            if (price > prices[j]) {
                break;
            }
        }
        results.push(result)
    }
    
    return results;
}