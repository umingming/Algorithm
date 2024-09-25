/*
    동적 프로그래밍
    1. 길이가 n인 배열을 정의; 요소는 길이가 m인 배열. 모든 요소는 0
    2. 0, 0을 1로 정의
    3. n만큼 반복
        > x-1, y-1을 더한 값을 할당
        > puddles에 해당하면 0유지
*/
function solution(m, n, puddles) {
    const dp = Array.from({length: n}, () => Array(m).fill(0));
    dp[0][0] = 1;
    
    // 0부터 시작하므로 puddles 재설정
    const puddleSet = new Set(puddles.map(([x, y]) => `${x - 1},${y - 1}`));
    
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            // 물구덩이면 패스
            if ((x === 0 && y === 0) || puddleSet.has(`${x},${y}`)) {
                continue;
            } 
            
            if (x > 0) {
                dp[y][x] += dp[y][x - 1];
            }
            
            if (y > 0) {
                dp[y][x] += dp[y - 1][x];
            }
            // 오버플로우 방지를 위해 나눗셈을 사용함.
            dp[y][x] %= 1000000007;
        }
    }
    
    return dp[n - 1][m - 1];
}