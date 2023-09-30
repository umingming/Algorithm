/*
    숫자의 최댓값 구하기
    - 인덱스는 i, +i만 가능한 것
    
    1. reduce해서 찾기 시작 값은 이중 배열로 [[0, 0]]; 인덱스, 총합
        1) acc자체를 cur map으로 반환한 것의 concat으로 map하기
*/
function solution(triangle) {
    const sums = triangle.slice(1).reduce((acc, cur) => {
        const indexMap = {};
        acc.forEach(([index, sum]) => {
            const left = indexMap[index] ?? 0;
            const right = indexMap[+index + 1] ?? 0;
            indexMap[index] = left >= +cur[index] + sum ? left : +cur[index] + sum;
            indexMap[+index + 1] = right >= +cur[+index + 1] + sum ? right : +cur[+index + 1] + sum;       
        });
        return Object.entries(indexMap);
    }, [[0, +triangle[0]]]).map(([index, sum]) => sum || 0);
    return Math.max(...sums);
}