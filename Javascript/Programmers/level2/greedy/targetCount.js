/*
    미사일의 최솟값
    - 겹치는 부분이 없는 값들 구하기
    
    1. targets reduce로 배열로 만들어서 리턴하기
        1) cur의 범위가 acc 중 중복되는 게 있는지? 없을 경우 acc에 push
*/
function solution(targets) {
    const result = targets.sort((a, b) => a[0] > b[0] ? 1 : -1).reduce((acc, cur) => {
        const index = acc.findIndex(([min, max]) => cur[0] < max);
        
        if (index > -1) {
            const [min, max] = acc[index];
            acc[index] = cur[0] >= min && cur[1] <= max ? cur : [min, max]; 
        } else {
            acc.push(cur);
        }
        return acc;
    }, [])
    
    return result.length;
}