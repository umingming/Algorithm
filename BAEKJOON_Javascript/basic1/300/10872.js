/*
    팩토리얼 구하기
    1. result 변수 후 입력 값 할당
    2. while문으로 숫자가 0이 아니면 반복
        > result에 num 곱하기
    3. 0이면 1 출력
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
    let result = 1;

    while (num) {
        result *= num--;
    }

    console.log(result);
}