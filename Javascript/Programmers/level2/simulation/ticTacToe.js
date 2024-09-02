/*
    1. o, x의 갯수를 구하고 X가 O보다 1개 적거나 같은지 판단한다. 
    2. 틱택토 성공여부를 알 수 있는 함수를 구한다.
    3. 선공이 성공한 경우 X는 1개 적다
    4. 후공이 성공한 경우 O와 X는 같다.
*/
function solution(board) {
    const countConfig = [0, 0];
    for (const row of board) {
        for (const col of row) {
            if (col === "O") {
                countConfig[0]++;
            } else if (col === "X") {
                countConfig[1]++;
            }
        }
    }
    
    if (![0, 1].includes(countConfig[0] - countConfig[1])) {
        return 0;
    }
    
    function getResult(target) {
        for (let i = 0; i < 3; i++) {
            if (board[i].split("").every(col => col === target)) {
                return true;
            }
            if (board.every(row => row[i] === target)) {
                return true;
            }
        }
        
        if (board.every((row, index) => row[index] === target)) {
            return true;
        }
        if (board.every((row, index) => row[2 - index] === target)) {
            return true
        }
        
        return false;
    }
    
    const resultConfig = [getResult("O"), getResult("X")];
    
    if (resultConfig[0]) {
        return !resultConfig[1] && countConfig[0] - countConfig[1] === 1 ? 1 : 0;
    } else if (resultConfig[1]) {
        return !resultConfig[0] && countConfig[0] === countConfig[1] ? 1 : 0;
    } 
    
    return 1;
}