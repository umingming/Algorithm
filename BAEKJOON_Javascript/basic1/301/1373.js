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
    let input = line.split("");
    let results = "";
    while (input.length) {
        let result = 0;
        // result += input.pop() && 1;
        console.log(input.pop() && 1);
        // result += input.pop() && 2;
        console.log(result);
        // result += input.pop() && 4;
        console.log(result);

        results = results + result;
    }
    
    console.log(results);
}
