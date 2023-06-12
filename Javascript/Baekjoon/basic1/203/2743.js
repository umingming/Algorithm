/*
    단어 길이 구하기

    1. 입력 모듈 정의
    2. solution
        > 길이 반환
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line);
});

function solution(line) {
    console.log(line.length);
}