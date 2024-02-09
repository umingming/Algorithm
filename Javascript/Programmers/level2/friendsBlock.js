/*
    프렌즈4블록
    
    1. removeBlock 정의
        > border 반복
        > row에 연속되는 수가 있는지?
        > 해당 row의 아랫줄에 같은 값이 있는지?
            > 있으면 row를 X로 치환하고 아랫줄은 배열로 만들어 X로 놔두기
        > 지운 값이 없다면 false 반환
    2. while true로 반복
        > removeBlock이 false 이면 중단
    3. board를 flat하여 X의 갯수 구하기
*/
function solution(m, n, board) {
    board = board.map(row => row.split(""));
    
    function removeBlock() {
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (board[i][j][0] == "0") continue;
                if (board[i][j][0] != board[i][j + 1][0]) continue;
                if (board[i][j][0] != board[i + 1][j][0]) continue;
                if (board[i][j][0] != board[i + 1][j + 1][0]) continue;
                
                board[i][j] = [board[i][j][0], "0"];
                board[i][j + 1] = [board[i][j][0], "0"];
                board[i + 1][j] = [board[i][j][0], "0"];
                board[i + 1][j + 1] = [board[i][j][0], "0"];
            }
        }
        
        board = board.map(row => row.map(item => item.length > 1 ? "0" : item[0]));
    }
    
    while(true) {
        let flag = false;
        
        removeBlock();
        
        for (let i = m - 1; i >= 0; i--) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] != "0") continue;
                
                for (let k = i - 1; k >= 0; k--) {
                    if (board[k][j] != "0") {
                        board[i][j] = board[k][j];
                        board[k][j] = "0";
                        flag = true;
                        break;
                    }
                }
            }
        }
        if (!flag) break;
    }
    
    const { length } = board.flat().filter(item => item === "0");
    return length ?? 0;
}