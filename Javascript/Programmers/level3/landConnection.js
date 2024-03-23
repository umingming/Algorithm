/*
    탐욕법
    
    1. costs를 2번째 요소, 0번째 요소, 1번째 요소 기준으로 내림차순 정렬한다.
    2. connectionConfig 정의; n 이차배열이며, 요소는 0으로 채움.
    3. while connectionConfig의 0번째 요소의 slice(1) 배열 중 하나라도 0인 것을 조건으로 반복
        > costs를 pop해서 start, end, cost 변수를 선언
        > 해당 값으로 connectionConfig를 채운다.
        > 0번째 요소에서 0이 아닌 값의 인덱스에 해당되면 상대 인덱스에 해당하는 요소에 해당 금액 기입
    4. 0번째 요소의 총합을 반환한다.
*/
function solution(n, costs) {
    costs.sort((a, b) => b[2] - a[2] || b[0] - a[0] || b[1] - a[1]);
    const connectionConfig = Array.from({length: n}, () => Array(n).fill(0));
    let total = 0;
    
    if (n === 1) {
        return 0;
    }
    
    while (connectionConfig.every(costs => costs.filter(cost => !cost).length > 1)) {
        const [start, end, cost] = costs.pop();
        const startLand = connectionConfig[start];
        const endLand = connectionConfig[end];
        
        if (!startLand[end]) {
            startLand[end] = cost;
            endLand[start] = cost;
            for (let i = 0; i < n; i++) {
                if (startLand[i] && !endLand[i] && end !== i) {
                    endLand[i] = cost
                    connectionConfig[i][end] = cost
                } else if (!startLand[i] && endLand[i] && start !== i) {
                    startLand[i] = cost
                    connectionConfig[i][start] = cost
                }
            }
            total += cost;
        }
    }
    
    return total;
}