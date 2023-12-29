/*
    순위
    - 정확히 순위를 매기려면 단계에 하나의 값만 있을 경우
    
    1. results를 오름차순 정렬한다.
    2. reduce해서 새로운 배열을 만든다.
        > acc를 flat해서 현재 요소가 있는지 확인
        [1][2]; 없을 경우 둘이 사이 좋게 들어간다
            > 안 겹치면 또 사이좋게 들어가야 함.
        [1][2][5] 우승 요소가 있으면 그 다음으로 넣음
        [1,3][2][5] 진 요소가 있으면 그 앞으로 넣음
        [1,3,4][2][5] 
        [1,4][1,3][2][5] 간은 순서에 있으면 앞으로 뺴면서 동일한 인덱스의 값들도 같이 묶음.
*/
function solution(n, results) {
    const result = results.sort((a, b) => a[0] - b[0] || a[1] - b[1]).reduce((acc, [win, lose]) => {
        if (!acc.length) return [];
        
        const indexWin = acc.findIndex(arr => arr.includes(win));
        const indexLose = acc.findIndex(arr => arr.includes(lose));
        
        if (indexWin === -1 && indexLose === -1) {
            if (acc.length > 2) return [];
            acc[0].push(win);
            acc[1].push(lose);
        } else if (indexLose === -1) {
            //win이 마지막 요소인 경우
            if (indexWin === acc.length - 1) {
                acc.push([lose]);
            } else {
                acc.filter((_, index) => index > indexWin)
                    .forEach(arr => arr.push(lose));
            }
        } else if (indexWin === -1) {
            //lose가 첫 번째 요소인 경우
            if (indexLose === 0) {
                acc.unshift([win]);
            } else {
                acc.filter((_, index) => index < indexLose)
                    .forEach(arr => arr.push(win));
            }
        } else if (indexWin === indexLose) {
            const wins = acc.slice(0, indexWin);
            const loses = acc.slice(indexWin + 1);
            const target = acc[indexWin].filter(i => i !== lose && i !== win)
                            .reduce((i, j) => {
                                i[0].push(j);
                                i[1].push(j);
                                return i;
                            }, [[win], [lose]]);
            return [...wins, ...target, ...loses];
        }
        return acc;
    }, [[], []])
    

    if (result.length === results.length) return 0;
    
    const { length } = result?.filter(arr => arr.length === 1);
    return length ?? 0;
}