/*
    아이템 줍기
    - 두 길 중 어떤 게 더 빠를까?
    - 도형은 (x1, y1, x2, y2)
    
    1. 해당 좌표가 어느 도형인지 구하는 함수 정의
    2. 도형의 유효 직선 루트 구해서 배열 정의
    2. 하나의 도형에서 가능한 끝까지 이동하는 함수 정의
    3. 두 가지 경우 중 더 작은 값 반환
*/
function solution(rectangles, characterX, characterY, itemX, itemY) {
    
    function checkRange([min, max], target) {
        return target >= min && target <= max;
    }
    
    /*
        좌표로 속한 도형 반환; 2개일 수 있음.
        
        1. x가 0, 3번째 요소 내부 값이어야 함.
        2. y가 1, 4번째 요소 내부 값이어야 함.
    */
    function getRectangle(x, y) {
        return rectangles.filter(point => 
            checkRange([point[0], point[2]], x) 
                && checkRange([point[1], point[3]], y),
        );
    }
    
    /*  
        x: x 좌표에 대한 y의 범위
        y: y 좌표에 대한 x의 범위
        
        1. 현재 도형의 좌표를 top, bottom, left, right 4가지 root로 나눈다.
            > root의 형식은 {x/y: [x/y1, x/y2]}로 x or y 하나에 대한 배열 값
        2. top, bottom 은 x root와 비교
        3. left, right은 y root와 비교해 겹치는 부분이 있는지 찾는다
        4. 겹치는 부분은 재정의한다.
    */
    const rootMap = rectangles.reduce((acc, cur) => {
        const rangeX = [cur[0], cur[2]];
        const rangeY = [cur[1], cur[3]];
        // const top = {[cur[1]]: [cur[0], cur[2]]}; //y
        // const bottom = {[cur[3]]: [cur[0], cur[2]]}; //y
        // const left = {[cur[0]]: [cur[1], cur[3]]}; //x
        // const right = {[cur[1]]: [cur[1], cur[3]]}; //x
        
        // x 키값이 x 범위내에 y 값도 겹친다. 
        const overlapX = Object.keys(acc.x).filter(key => {
            // rangeX 내에 key가 겹치지 않으면 패스
            if (!checkRange(rangeX, key)) return false;
            
            const {length} = acc.x[key].filetr(([min, max]) => {
                    return checkRange(rangeY, min) || checkRange(rangeY, max);
                })
            return length > 0
        })
        
        const overlapY = Object.keys(acc.y).filter(key => {
            // rangeX 내에 key가 겹치지 않으면 패스
            if (!checkRange(rangeY, key)) return false;
            
            const {length} = acc.y[key].filetr(([min, max]) => {
                    return checkRange(rangeX, min) || checkRange(rangeX, max);
                })
            return length > 0
        })
        
        // overlapX가 있으면 rangeY에 대한 조정이 필요한 거고, overlapX 값도 수정해야지
        if (overlapX.length) {
            for (const key of overlapX) {
                acc.x[key].foreach(([min, max], index) => {
                    if (min < rangeY[1]) {
                        acc.x[key][index][0] = rangeY[1]; 
                    }
                    if (max > rangeY[0]) {
                        acc.x[key][index][1] = rangeY[0];
                    }
                })
            }
        }
    
    }, { x: {}, y: {} })
    
    function move
    var answer = 0;
    return answer;
}