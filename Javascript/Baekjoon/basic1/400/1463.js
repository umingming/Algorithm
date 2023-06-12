/*
    1로 만들기
    - /3, /2, --만 사용해서 1 만들기

    1. num + 1을 길이로 하는 배열 생성 후 0으로 채우기
    2. 2부터 num까지 반복
        > 배열의 요소는 이전 요소 + 1
        > if 3으로 나누어 떨어지는지?
            > 몫을 인덱스로 하는 요소의 값 +1 과 현재 요소 중 최소 값
        > if 2로 나누어 떨어지는지
            > 몫을 인덱스로 하는 요소의 값 +1 과 현재 요소 중 최소 값
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(+line);
});

function solution(num) {
    let results = new Array(num + 1).fill(0);

    for (let i = 2; i < results.length; i++) {
        results[i] = results[i - 1] + 1;
        
        if (!(i % 3)) {
            results[i] = Math.min(results[i / 3] + 1, results[i]);
        }
        
        if (!(i % 2)) {
            results[i] = Math.min(results[i / 2] + 1, results[i]);
        }
    }

    console.log(results[num]);
}