/*
    숫자의 최댓값 구하기
    - 인덱스는 i, +i만 가능한 것
    
    1. reduce해서 찾기 시작 값은 이중 배열로 [[0, 0]]; 인덱스, 총합
        1) acc자체를 cur map으로 반환한 것의 concat으로 map하기
*/
function solution(triangle) {
    const sums = triangle.reduce((acc, cur) => {
        const answer = [];
        acc.forEach(([index, sum]) => {
           answer.push([index, cur[index] + sum]);
           answer.push([index + 1, cur[index + 1] + sum]);
        });
        return answer;
    }, [[0, 0]]).map(([index, sum]) => sum || 0);
    return Math.max(...sums);
}