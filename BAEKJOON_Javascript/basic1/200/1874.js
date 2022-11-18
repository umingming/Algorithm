/*
    1. 입력 모듈 정의
    2. size, result, stack, index
    3. if size가 undefined인지?
        > size에 line 할당
        > 아니면, solution 메소드 호출
    4. solution
        > stack의 마지막 값을 top에 할당
        > if index가 line보다 작은지?
            > index + 1부터 line까지 stack에 num 저장
            > index = line
            > result += '+'
        > elseIf index가 line보다 큰지?
            > result = 'NO'
            > close 호출
        > if stack의 top이 num인지?
            > stack.pop()
            > index--
            > result += '-'
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cnt;
let result = "";
let stack = [];
let index = 0;

rl.on("line", (line) => {
    if (cnt === undefined) {
        cnt = line;
    } else {
        solution(line);
        cnt--;
    }

    if (cnt === 0) rl.close();
});

rl.on("close", () => {
    console.log(result);
    process.exit();
});

function solution(line) {
    let top = stack[stack.length - 1];
    if (top === undefined) top = 0;

    if (top > line) {
        result = 'NO';
        rl.close();
    }

    if (index < line) {
        for (let i = index + 1; i <= line; i++) {
            stack.push(i);
            result += '+\n'
        }
        index = line;
    }

    if (stack[stack.length - 1] == line) {
        stack.pop();
        result += '-\n';
    }
}