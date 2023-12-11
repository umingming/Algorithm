/*
    제품을 할인 받을 수 있는 일수
    
    1. discount - 10만큼 반복
    2. i부터 i+10까지 자른 배열이 모두 want에 해당하는지? 아니면 continue
    3. 갯수가 맞는지?
*/
function solution(want, number, discount) {
    let count = 0;
    for (let i = 0; i < discount.length - 9; i++) {
        const discounts = discount.slice(i, i + 10);
        if (!discounts.every(discount => want.includes(discount))) {
            continue;
        } else if (!want.every((want, index) => {
            const { length } = discounts.filter(discount => discount === want);
            return length === number[index];
        })) {
            continue;
        }
        count++;
    }
    
    return count;
}