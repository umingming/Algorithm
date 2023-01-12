/*
    카드 구매하기

    1. N과 배얼 P 선언
    2. 입력을 쪼개 P에 할당
    3. 배열 반복
        > 현재 요소의 값이 이전 값 + 첫 요소보다 큰지?
            > standard에 i 할당
        > i + 1이 standard로 나누어 떨어지는지
            > i + 1 / standard * P 저장
    4. 마지막 값 꺼내기
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;

rl.on("line", (line) => {
    if (N === undefined) { 
        N = +line;
    } else {
        solution(line);
    }
});

function solution(line) {
    let P = line.split(" ").map(i => +i);
    let j = N + 1;
    for (let i = 1; i < N; i++) {
        
        if (P[i] > P[i-1] + P[0]) {
            j = P[j-1] / j > P[i] / (i + 1) ? j : i + 1;
        } else {
            P[i] = P[i-1] + P[0];
        }
        
        if ((i + 1) % j === 0) {
            P[i] = (i + 1) / j * P[j-1];
        }
    }
    console.log(P.pop());
}