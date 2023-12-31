/*
    순위
    - 정확히 순위를 매기려면 단계에 하나의 값만 있을 경우
    
    1. result 함수 정의
    2. for 1부터 n까지
        > i가 0번째 인덱스에 있는 것들 중 밑에 있는 건 lose, 위에 있는건 win으로 넣어서
        > n-1번째 요소에 위의 값 정의
    3. result를 map에서 재정의
    4. 모든 요소를 가지고 있는 것들의 갯수 반환
*/
function solution(n, results) {
    const result = results.sort((a, b) => a[0] - b[0] || a[1] - b[1]).reduce((acc, [win, lose]) => {
        const targetWin = acc[win - 1];
        const targetLose = acc[lose - 1];
        
        //lose 기준으로 win 추가
        targetLose[0].add(win);
        acc.filter(([target, _]) => target.has(lose))
            .forEach(([target, _]) => {
            target.add(win);
            targetWin[0].forEach(winwin => target.add(winwin));
        });
        targetLose[1].forEach(target => {
            targetWin[1].add(target)
        });
        
        //win 기준으로 lose 추가
        targetWin[1].add(lose);
        acc.filter(([_, target]) => target.has(win))
            .forEach(([_, target]) => {
            target.add(lose);
            targetLose[1].forEach(loselose => target.add(loselose));
        });
        targetWin[0].forEach(target => {
            targetLose[0].add(target);
        });
        
        return acc;
}, Array.from({length:n}, () => [new Set(), new Set()]));
    
    const { length } = result.filter(([winSet, loseSet]) => winSet.size + loseSet.size === n - 1);
    return length;
}