/*
    숫자의 최댓값 구하기
    - 인덱스는 i, +i만 가능한 것
    
    1. reduce해서 찾기 시작 값은 이중 배열로 [[0, 0]]; 인덱스, 총합
        1) acc자체를 cur map으로 반환한 것의 concat으로 map하기
*/
function solution(triangle) {
    const indexMap = triangle.slice(1).reduce((acc, cur) => {
        Object.entries(acc).forEach(([index, sum]) => {
            index = +index;
            const left = acc[index] ?? 0;
            const right = acc[index + 1] ?? 0;
            acc[index] = left >= +cur[index] + sum ? left : +cur[index] + sum;
            acc[index + 1] = right >= +cur[index + 1] + sum ? right : +cur[index + 1] + sum;       
        });
        return acc;
    }, {0: +triangle[0]});
    const max = Math.max(...Object.values(indexMap).map(value => value || 0));
    return max;
}