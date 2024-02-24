/*
    게임 맵 최단거리
    - (0, 0) => (n, m)
    
    1. point 0, 0 배열, length 0 선언
    2. move 함수 정의
        > 상, 하, 좌, 우로 움직이면서 맵의 숫자를 재정의한다.
*/
function solution(maps) {
    function move(row, col, step) {
        const value = maps?.[row]?.[col];
        if (value === 1 || (value && value > step)) {
            maps[row][col] = step++;

            move(row, col + 1, step);
            move(row + 1, col, step);
            move(row, col - 1, step);
            move(row - 1, col, step);
        }
    }
    
    move(0, 0, 1);
    
    const result = maps[maps.length - 1][maps[0].length - 1];
    return result !== 1 ? result : -1;
}