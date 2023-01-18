/*
    쉬운 계단수

    1. 9를 요소로 하는 배열 선언
    2. n 만큼 반복
        > 이전 요소 * 2 - index 
    3. pop 콘솔
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(+line);
});

function solution(N) {
    let results = [9];
    while (--N) {
        let result = results[results.length - 1] * 2 - results.length;
        results.push(result % 1000000000);
    }

    console.log(results.pop());
}