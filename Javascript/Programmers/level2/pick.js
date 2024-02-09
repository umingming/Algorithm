/*
    귤 고르기
    
    1. 크기별 갯수를 의미하는 객체 정의
    2. 갯수 많은 순으로 정렬하고, reduce로 몇 개 종류인지 확인
*/
function solution(k, tangerine) {
    const config = tangerine.reduce((acc, cur) => {
        acc[cur] = (acc[cur] ?? 0) + 1;
        return acc;
    }, {})
    const sizes = Object.values(config).sort((a, b) => b - a);
    const result = sizes.reduce((acc, cur) => {
        if (acc[1] < k) {
            acc[0]++;
            acc[1] += cur;
        }
        return acc;
    }, [0, 0]);
    return result[0];
}