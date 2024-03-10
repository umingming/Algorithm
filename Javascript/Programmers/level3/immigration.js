function solution(n, times) {
    times.sort((a, b) => a - b);
    let minTime = times[0];
    let maxTime = minTime * n;
    let answer = maxTime;
    
    while (minTime <= maxTime) {
        const midTime = Math.floor((minTime + maxTime) / 2);
        const evaluations = times.reduce((acc, cur) => acc + Math.floor(midTime / cur), 0);
        
        if (evaluations < n) {
            minTime = midTime + 1;
        } else {
            answer = midTime;
            maxTime = midTime - 1;
        }
    }
    
    return answer;
}
