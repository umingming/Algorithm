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
    let count = 0;
    
    while (y > x && y != x) {
        const diff = y - n;
        const countByX = getCount(x, y);
        const countByN = getCount(x, diff);       

        if ((diff === x || countByN) && countByX > countByN + 1) {
            count += countByN + 1;
            y = x;
            break;
        } else if (countByX) {
            count += countByX;
            y = x;
            break;
        }
        count++;
        y = diff;
    }

    return y === x && count ? count : -1;
}

function getCount(x, y) {
    let count = 0;
    
    if (!(y % (x * 3))) {
        const quot = y / (x * 3);
        count += quot;
        y /= quot;
    }
    
    if (!(y % (x * 2))) {
        const quot = y / (x * 2);
        count += quot;
        y /= quot;
    }
    
    return count;
}