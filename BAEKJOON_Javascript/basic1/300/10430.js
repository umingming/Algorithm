/*
    접미사 배열 구하기

    1. 입력 모듈 정의
    2. solution
        > 입력 값 할당
        > (A+B)/C 출력
        > ((A/C) + (B/C))/C
        > (A×B)/C
        > ((A/C) × (B/C))/C
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
    let nums = line.split(' ').map(i => +i);
    let A = nums[0];
    let B = nums[1];
    let C = nums[2];

    console.log((A + B) % C);
    console.log(((A % C) + (B % C)) % C);
    console.log((A * B) % C);
    console.log(((A % C) * (B % C)) % C);
}
