/*
    1. 길이가 n인 배열을 정의; 요소는 길이가 m인 배열. 모든 요소는 0
    2. 0, 0을 1로 정의
    3. n만큼 반복
        > x-1, y-1을 더한 값을 할당
        > puddles에 해당하면 0유지
*/
function solution(m, n, puddles) {
    const dp = Array.from({length: n}, () => Array.from({length: m}, () => 0));
    dp[0][0] = 1;
    
    for (let y = 0; y < n; y++) {
        // 0부터 시작하므로 puddles 재설정
        const puddlesByY = puddles
                                .filter(puddle => puddle[1] === y + 1)
                                .map(puddle => --puddle[0]);
        for (let x = 0; x < m; x++) {
            // 물구덩이면 패스
            if (puddlesByY.includes(x) || (x === 0 && y === 0)) {
                continue;
            } 
            
            const left = dp[y][x - 1] ?? 0;
            const top = dp[y - 1]?.[x] ?? 0;
            dp[y][x] = (left + top) % 1000000007;
        }
    }
    
    return dp[n - 1][m - 1];
}