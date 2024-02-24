/*
    게임 맵 최단거리
    - (0, 0) => (n, m)
    
    1. point 0, 0 배열, length 0 선언
    2. move 함수 정의
        > 상, 하, 좌, 우로 움직이면서 맵의 숫자를 재정의한다.
*/
function solution(maps) {
    const n = maps.length - 1;
    const m = maps[0].length - 1;
    let min = Infinity;
    
    
    function move(row, col, step) {
        if (step + (n - row) + (m - col) > min || row > n || row < 0 || col > m || col < 0) {
            return;
        }
        
        const value = maps[row][col];
        if (value === 1 || (value && value > step)) {
            if (row === n && col === m) {
                min = Math.min(min, step);
            }
            maps[row][col] = step++;

            move(row, col + 1, step);
            move(row + 1, col, step);
            move(row, col - 1, step);
            move(row - 1, col, step);
        }
    }
    
    move(0, 0, 1);
    
    const result = maps[n][m];
    return maps[n][m] !== 1 ? result : -1;
}