/*
    입국 심사
    
    1. times 배열 형태로 변경 [걸리는 시간, 가능한 시간]
    1. while 반복 n이 있을 때 까지.
        1) times 예측 시간 기준으로 오름차순 정렬
        2) 첫 번째 요소의 가능한 시간 += 걸리는 시간
*/
function solution(n, times) {
    times = times.map(time => [+time, 0]);
    while (n) {
        times.sort((a, b) => a[0] + a[1] - (b[0] + b[1]))
        times[0][1] = times[0][0] + times[0][1];
        n--;
    }
    return Math.max(...times.map(time => time[1]));
}