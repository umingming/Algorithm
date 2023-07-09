/*
    광물 캐기
    - 한 번 사용하기 시작한 곡괙이는 5번의 광물을 캘 수 있음.
    
    1. 배열을 5개씩 객체로 묶기
    2. 합을 계산해 정렬하기
*/
function solution(picks, minerals) {
    const mineralsByFive = minerals.reduce((acc, cur) => {
        if ([0, 5].includes(acc.at(-1)?.length ?? 0)) {
            acc.push([cur]);
        } else {
            acc.at(-1).push(cur);            
        }
        return acc;
    }, [])
    
    const getMaxValue = (arr) => {
        const maxValue = {
            diamond: 25,
            iron: 5,
            stone: 1
        }
        return Object.values(arr)[0].reduce((acc, cur) => acc + maxValue[cur], 0);
    }
    
    const sortedMinerals =  mineralsByFive
                                .reduce((acc, cur, i) => {
                                    acc.push({[i]: cur});
                                    return acc;
                                }, [])
                                .sort((a, b) => getMaxValue(a) > getMaxValue(b) ? -1 : 1);
    sortedMinerals.forEach(i => {
        const pick = picks[0]-- > 0 ? "dia" : picks[1]-- > 0 ? "iron" : picks[2]-- > 0 ? "stone" : undefined;
        const value = 
    })
    
    
    
    console.log(sortedMinerals)
    return [];
}