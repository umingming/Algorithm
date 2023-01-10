/*
    카드 구매하기

    1. N과 배얼 P 선언
    2. 입력을 쪼개 P에 할당
    3. 배열 반복
        > 해당 요소랑 이전 요소 + 첫 번째 요소랑 더한 값 중 최대값 재할당
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
    for (let i = 1; i < N; i++) {
        P[i] = Math.max(P[i-1] + P[0], P[i]);

        if (i > 1 && i % 2) {
            P[i] = Math.max(P[i-2] + P[1], P[i]);
        } 
        console.log(P);
    }
    console.log(P.pop());
}

