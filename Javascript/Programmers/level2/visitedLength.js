/*
    방문 길이
    
    1. 11x11 배열을 선언한다.
    2. result, point(5,5) 변수 선언
    3. dirs 반복한다
        > switch로 분기 나누고 point 이동
        > map에 현재 dirs와 겹치는 게 없으면 ++;
*/

function solution(dirs) {
    const map = Array.from({length: 11}, () => Array.from({length: 11}, () => []));
    let x = 5;
    let y = 5;
    let result = 0;
    
    for (const dir of dirs) {
        if (dir === "L") {
            const newX = Math.max(0, x - 1);
            if (!map[y][newX].includes(dir) && !map[y][x].includes("R")) {
                result++;
            }
            x = newX;
        } else if (dir === "R") {
            const newX = Math.min(10, x + 1);
            if (!map[y][newX].includes(dir) && !map[y][x].includes("L")) {
                result++;
            }
            x = newX;
        } else if (dir === "U") {
            const newY = Math.min(10, y + 1);
            if (!map[newY][x].includes(dir) && !map[y][x].includes("D")) {
                result++;
            }
            y = newY;
        } else if (dir === "D") {
            const newY = Math.max(0, y - 1);
            if (!map[newY][x].includes(dir) && !map[y][x].includes("U")) {
                result++;
            }
            y = newY;
        }
        if (!map[y][x].includes(dir)) {
            map[y][x].push(dir);
        }
    }
    
    return result;
}