/*
    주식 가격
    
    1. prices를 map한다; 인자는 (price, i)
        > findIndex로 index 구한다; newPrice, j
        > i < j, price > newPrice
        > index가 있으면 index - i, 없으면 length - i
        
*/
function solution(prices) {
    return prices.map((price, i) => {
        const index = prices.findIndex((newPrice, j) => i < j && price > newPrice);
        return index > -1 ? index - i : prices.length - i - 1;
    })
}