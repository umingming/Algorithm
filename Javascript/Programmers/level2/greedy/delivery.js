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
        const time = roadMap[a][b] ? Math.min(roadMap[a][b], c) : c;
        roadMap[a][b] = time;
        roadMap[b][a] = time;
    }
    
    for (let i = N; i > 0; i--) {
        for (let j = N; j > 0; j--) {
            if (i === j) continue;
            
            for (let k = N; k > 0; k--) {
                if(i === k || j === k) continue;
                if(!roadMap[i][k] || !roadMap[j][k]) continue;
                
                const time = roadMap[i][j] 
                        ? Math.min(roadMap[i][j], roadMap[i][k] + roadMap[j][k])
                        : roadMap[i][k] + roadMap[j][k]
                
                roadMap[i][j] = time;
                roadMap[j][i] = time;
            }
            
        }
    }
    
    const {length} = roadMap[1].filter(value => value && value <= K);
    
    return length + 1;
}