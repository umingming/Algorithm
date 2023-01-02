/*
    8진수 -> 2진수

    1. 입력 모듈 정의
    2. solution
        > 입력 값을 쪼개 배열에 할당
        > 배열의 크기를 조건으로 while문 실행
            >  pop해서 해당 값을 2진법으로 변경
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
    let octal = line.split("");
    let binary = "";

    while (octal.length) {
        let num = parseInt(octal.pop(), 8).toString(2).padStart(3, "0");
        if (!octal.length) {
            num = +num
        }
        binary = num + binary;
    }

    console.log(binary);
}