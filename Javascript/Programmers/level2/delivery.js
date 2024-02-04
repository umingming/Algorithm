/*
    배달
    - a, b 마을 c는 시간
    
    1. n/n 이차 배열 roadMap 선언; 값은 0;
    2. road 반복
        > roadMap[a][b] = c, roadMap[b][a] = c
        > 값이 있을 경우 더 작은 값
    3. 두 마을 사이의 최단 거리 구하기 함수 정의
        > a+1 부터 N까지 반복
        > map[a][i]가 0이 아닌지?
            > getMinTime(i, b)
    4. for 2부터 까지 반복
        > 시간이 k보다 작으면 result++;
*/
function solution(N, road, K) {
    const roadMap = Array.from({length: N + 1}, () => Array(N + 1).fill(0));
    
    for (const [a, b, c] of road) {
        roadMap[a][b] = roadMap[a][b] ? Math.min(roadMap[a][b], c) : c;
    }
    
    function getMin(a, b) {
        const times = [];
        
        if (roadMap[a][b]) {
            times.push(roadMap[a][b])
        }
        
        for (let i = a + 1; i < N; i++) {
            if (roadMap[a][i]) {
                const time = roadMap[a][i] + getMin(i, b);
                times.push(time)l
            }
        }
        
        return Math.min(...times);
    }
}