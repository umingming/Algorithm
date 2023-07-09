/*
    광물 캐기
    - 한 번 사용하기 시작한 곡괙이는 5번의 광물을 캘 수 있음.
    
    1. 배열을 5개씩 객체로 묶기
    2. 합을 계산해 정렬하기
*/
function solution(picks, minerals) {
    const mineralMap = {
        diamond: 0,
        iron: 1,
        stone: 2,
    }
    const pickMap = {
        0: [1, 1, 1],
        1: [5, 1, 1],
        2: [25, 5, 1]
    }
    const total = picks.reduce((acc, cur) => acc + cur * 5, 0);
    const mineralsByFive = minerals.slice(0, total).reduce((acc, cur) => {
        if ([0, 5].includes(acc.at(-1)?.length ?? 0)) {
            acc.push([mineralMap[cur]]);
        } else {
            acc.at(-1).push(mineralMap[cur]);            
        }
        return acc;
    }, [])
    
    function getValue(mineralObj, pick) {
        const minerals = Object.values(mineralObj)[0];
        return minerals.reduce((acc, cur) => acc + pickMap[pick][cur], 0);
    }
    
    const sortedMinerals =  mineralsByFive
                                .reduce((acc, cur, i) => [...acc, {[i]: cur}], [])
                                .sort((a, b) => getValue(a, 2) > getValue(b, 2) ? -1 : 1)
                                .map(i => {
                                    const pick = picks.findIndex(pick => pick > 0);
                                    picks[pick]--;
                                    return {...i, result: getValue(i, pick)};
                                })
    
    return sortedMinerals
            .sort((a, b) => Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1)
            .reduce((acc, cur) => acc + cur.result, 0);
}