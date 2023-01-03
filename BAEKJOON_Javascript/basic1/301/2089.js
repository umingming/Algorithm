/*
    -2진수

    1. 입력 값이 음수 인지?
        > isNegative에 true 할당
    2. 입력의 절댓값을 2진법으로 바꿔 배열에 할당
    3. while문 배열의 크기
        > if 1보다 큰지? 배열의 가장 끝 요소 ++, 현재 num은 0으로
            > pop해서 +1한 값으로 push해야 할 듯
        > if isNegative? 배열의 가장 끝 요소 ++
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
    let isNegative = line < 0 ? true : false;
    let binary = Math.abs(line).toString(2).split("").map(i => +i);
    let result = "";

    while (binary.length) {
        let num = binary.pop();

        if (num > 1) {
            binary.push(binary.pop() + 1 || 1);
            num = 0;
        }
        
        if (isNegative && num) {
            binary.push(binary.pop() + 1 || 1);
        }

        isNegative = !isNegative;
        result = num + result;
    }

    console.log(result);
}