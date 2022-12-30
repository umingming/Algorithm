/*
    진수 변환숨바꼭질

    1. 입력 모듈 정의
    2. solution
        > 입력을 쪼개 배열에 할당  
        > result 변수 선언
        > while문 배열의 길이
            > pop이 0이 아니면 1; input.pop() && 1
            > input.pop() && 2
            > input.pop() && 4
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
    let binary = line.split("");
    let result = "";
    let octal = 0;
    let index = 1;

    while (binary.length) {
        octal += +binary.pop() && index;
        index *= 2;

        if (index > 4) {
            result = octal + result;
            octal = 0;
            index = 1;
        }


        
        // let result = 0;
        // result += (+binary.pop() && 1) || 0;
        // result += (+input.pop() && 2) || 0;
        // result += (+input.pop() && 4) || 0;
        // results = result + results;
    }
    console.log(result);
}
