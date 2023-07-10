/*
    로봇의 이동 횟수 구하기
    - G의 상하좌우에 D가 있을 것
    
    1. 현재 위치를 의미하는 position 변수 선언
    2. d가 어느 방향에 있는지 구하기
    3. 재귀 함수 사용해서 r까지 가기
*/
function solution(board) {
    function getPosition(target) {
        const x = board.findIndex(i => i.includes(target));
        const y = board[x].findIndex(i => i === target);
        return [x, y];
    }
    function getDamagePositions(target) {
        const positions = [];
        if (board[target[0]], board[target[0]])
    }
    const robot = getPosition("R");
    const goal = getPosition("G");
    
    if ()
    var answer = 0;
    return answer;
}