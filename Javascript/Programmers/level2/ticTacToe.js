/*
    TicTacToe
    - 가능하면 1 불가능하면 0
    - 보통 countO의 갯수는 countX의 갯수보다 하나 많거나 같아야 함.
    - countX가 3 이상일 경우, countO가 승리하지 않았어야 함.
    - 이미 게임이 끝났는데도 진행된 경우 고려해야 함.
    
    1. countO, countX구하기
    2. countO의 갯수가 countX의 갯수보다 하나 많거나 같지 않으면 0 반환
    3. rowO, rowX 구하기
    4. rowO, rowX의 갯수가 1이 넘으면 0 반환
*/
function solution(board) {
    function getCountBy(letter) {
        return board.reduce((acc, cur) => {
            acc += [...cur].filter(i => i === letter)?.length ?? 0
            return acc;
        }, 0) ?? 0;
    }
    function getRowBy(letter) {
        const rowH = board.reduce((acc, cur) => {
            acc += +[...cur].every(i => i === letter);
            return acc;
        }, 0);
        const rowV = [...board[0]].reduce((acc, cur, index) => {
            if (cur === letter) {
                acc += +board.every(i => i[index] === cur);
            }
            return acc;
        }, 0);
        const rowD = +board.every((row, index) => row[index] === letter)
            + +board.every((row, index) => row[2 - index] === letter);
        
        return rowH + rowV + rowD ?? 0;
    }
    
    const countO = getCountBy("O");
    const countX = getCountBy("X");
    
    if (![countX, countX + 1].includes(countO)) {
        return 0;
    }
    
    const rowO = getRowBy("O");
    const rowX = getRowBy("X");
    
    if (rowO === 1 && countO === countX) return 0;
    if (rowX === 1 && countO > countX) return 0;
    return 1;
}
