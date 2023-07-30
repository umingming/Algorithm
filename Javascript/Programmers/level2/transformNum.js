/*
    숫자 변환하기
    - x + n, x * 2, x * 3
    - -1 
    
    1. if y 가 6 * x로 나누어 떨어지는지?
    2. if y 가 3 * x로 나누어 떨어지는지?
    3. if y 가 2 * x로 나누어 떨어지는지?
    4. if y 가 6 * x로 나눈 나머지가 n으로 만들 수 있는지?
    5. if y 가 6 * x로 나눈 나머지가 n으로 만들 수 있는지?
    6. if y 가 6 * x로 나눈 나머지가 n으로 만들 수 있는지?
    7. 안 되면 -1
*/

function solution(x, y, n) {
    const getQuotBy = (num) => y / (x * num);
    const getRemBy = (num) => y % (x * num);

    let count = 0;
    const countByN = !((y - x) % n) ? (y - x) / n : 0;
    
    while (getRemBy(1) && !((y - n) % x)) {
        y -= n;
        count++;
    }
    
    while (!getRemBy(2) || !getRemBy(3)) {
        if (!getRemBy(2)) {
            y /= 2;
            count++;
        }
        if (!getRemBy(3)) {
            y /= 3;
            count++;
        }
    }
    
    return y === x && count ? Math.min(count, countByN || count) : -1;
}