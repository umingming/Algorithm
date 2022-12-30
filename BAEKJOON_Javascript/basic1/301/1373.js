/*
    진수 변환숨바꼭질

    1. 입력 모듈 정의
    2. solution
        > 입력을 쪼개 배열에 할당  
        > result 변수 선언
        > while문 배열의 길이
            > pop이 0이 아니면 1; binary.pop() && 1
            > binary.pop() && 2
            > binary.pop() && 4
*/

const readline = require("readline");

const rl = readline.createInterface({
    binary: process.stdin,
    output: process.stdout,
});


rl.on("line", (line) => {
    solution(line);
});

function solution(line) {
    let binary = line.split("").map(i => +i);
    let octal = "";

    while (binary.length) {
        octal = toOctal(binary.pop(), binary.pop(), binary.pop()) + octal;
    }
    console.log(octal);
}

function toOctal(x = 0, y = 0, z = 0) {
    return x && 1 + y && 2 + z && 4;
}