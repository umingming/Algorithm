/*
    당구 연습(직각삼각형 변의 길이)
    - 입사각과 반사각 동일
    
    1. getMinDistance 함수 정의
        1) if x 좌표의 차가 더 큰지?
            - n-y의 차와 y좌표 차 중 작은 값의 제곱과 위의 값을 반환
        2) else y 좌표의 차가 더 큰 경우
            - m-x의 차와 x 차 중 작은 값의 제곱과 y 좌표 차의 제곱을 더해 반환
    2. balls map하여 answer 정의
*/
function solution(m, n, startX, startY, balls) {
    function getMinDistance([x, y]) {
        const powX = Math.pow(startX - x, 2);
        const powY = Math.pow(startY - y, 2);
        const minX = Math.min(startX + x, 2 * m - startX - x);
        const minY = Math.min(startY + y, 2 * n - startY - y);
        const getDistance = (pow, diff) => pow + Math.pow(diff, 2);
        
        if (!powX) {
            const diffY = startY < y ? startY + y : 2 * n - startY - y;
            return Math.min(getDistance(0, diffY), getDistance(powY, minX))
        } else if (!powY) {
            const diffX = startX < x ? startX + x : 2 * m - startX - x;
            return Math.min(getDistance(0, diffX), getDistance(powX, minY))
        } else {
            return Math.min(getDistance(powX, minY), getDistance(powY, minX));
        }
    }
    
    return balls.map(i => getMinDistance(i));
}