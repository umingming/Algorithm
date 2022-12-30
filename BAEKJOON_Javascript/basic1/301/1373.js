/*
    진수 변환숨바꼭질

    1. 입력 모듈 정의
    2. solution
        > 입력 값을 8진수로 변환해 출력
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
    let result = parseInt(line, 2).toString(8);
    
    console.log(result);
}
