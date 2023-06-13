/*
    1등부터 등수 순서대로 담아 반환하기
    - 이름이 불린 선수는 앞에 선수를 추월한 것

    1. callings 반복
        1) 해당 player의 index 정의
        2) index 변경
    2. answer에 player 할당
*/
function solution(players, callings) {
    const playerIndex = players.reduce((acc, cur, i) => {
        acc[cur] = i;
        return acc;
    }, {})

    callings.forEach(calling => {
        const index = playerIndex[calling];
        const oldPlayer = players[index - 1];

        players[index] = oldPlayer;
        players[index - 1] = calling;
        playerIndex[oldPlayer] = index;
        playerIndex[calling] = index - 1;
    })
    return players;
}
