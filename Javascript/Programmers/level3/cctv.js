/*
    단속 카메라
    
    1. routes의 진입 값이 작은 순으로 정렬
    2. routes.reduce하여 구간 나누기
    3. 길이 반환
*/
function solution(routes) {
    routes.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    const {length} = routes.reduce((acc, [min, max]) => {
        // acc 중 cur과 구간이 겹치는 것의 index 반환
        const index = acc.findIndex(range => min <= range[1])
        
        // index가 유효하면 구간 분리 후 삽입
        if (index > -1) {
            acc[index][0] = Math.max(acc[index][0], min);
            acc[index][1] = Math.min(acc[index][1], max);
        } else {
            acc.push([min, max]);
        }
        return acc;
    }, [])
    
    return length;
}