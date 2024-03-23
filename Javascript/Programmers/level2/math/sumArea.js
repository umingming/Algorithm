/*
    우박수열 정적분
    
    1. 수, 면적의 배열을 요소로 할 seqConfigs 배열 정의
        > [k, 0]이 첫 번째 요소
    2. while k = 1이 아님을 조건으로 반복
        > k가 짝수라면 2로 나누고, 홀수라면 3을 곱하고 1을 더함
        > 이전 k와 새로운 k로 면적 구하기; (oldK + newK) / 2
        > k, 면적을 seqConfig에 추가
    3. ranges map
        > start는 첫 번째 요소, end는 seqConfigs의 크기 - 두 번째 요소
        > start, end로 seqConfigs를 slice한 후 총합 반환
*/
function solution(k, ranges) {
    const areas = [];
    while (k !== 1) {
        const newK = k % 2 ? k * 3 + 1 : k / 2;
        const area = (k + newK) / 2;
        
        areas.push(area);
        k = newK;
    }
    
    return ranges.map(range => {
        const start = range[0];
        const end = areas.length + range[1];
        
        return start <= end 
                ? areas.slice(start, end).reduce((acc, cur) => acc + cur, 0.0)
                : -1;
    })
}