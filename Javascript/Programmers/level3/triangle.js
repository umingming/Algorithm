/*
    숫자의 최댓값 구하기
    - 인덱스는 i, +i만 가능한 것
    
    1. reduce해서 찾기 시작 값은 이중 배열로 [[0, 0]]; 인덱스, 총합
        1) acc자체를 cur map으로 반환한 것의 concat으로 map하기
*/
function solution(triangle) {
    const answer = triangle.reduce((acc, cur) => {
        return acc.map(([index, sum]) => 
                ([[ index, cur[index] + sum],
                [ index + 1, cur[index + 1] + sum]])
        ).flat();
    }, [[0, 0]])
    return Math.max(...answer.map(([index, sum]) => sum || 0));
}