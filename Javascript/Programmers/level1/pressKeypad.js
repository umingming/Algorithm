/*
    키패드 누르기
    - 1, 4, 7은 왼손이고 3, 6, 9는 오른손
    
    1. 왼손 오른손을 배열 변수로 정의; [col, row]
    2. numbers 반복
        > col: (number-1)%3, row: (number-1)/3 내림값
        > numbers가 1, 4, 7인지? 왼손에 할당
        > numbers가 3, 6, 9인지? 오른손에 할당
        > numbers가 그도 아닐 경우 col과 row의 차중 더 가까운 손에 할당
*/

function solution(numbers, hand) {
    const pointMap = { L: [0, 3], R: [2, 3] };
    let result = "";
    
    function transformPoint(number) {
        const col = number ? (number - 1) % 3 : 1;
        const row = number ? Math.floor((number - 1) / 3) : 3;
        return [col, row];
    }

    function getDistance(point1, point2) {
        return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
    }

    for (number of numbers) {
        const point = transformPoint(number);
        
        function press(key) {
            pointMap[key] = point;
            result += key;
        }
        
        if ([1, 4, 7].includes(number)) {
            press("L");
        } else if([3, 6, 9].includes(number)) {
            press("R");
        } else {
            const distanceL = getDistance(pointMap.L, point);
            const distanceR = getDistance(pointMap.R, point);
            
            if (distanceL < distanceR) {
                press("L");
            } else if (distanceL > distanceR) {
                press("R");
            } else {
                const key = hand[0].toUpperCase();
                press(key);
            }
        }
    }
    
    return result;
}
