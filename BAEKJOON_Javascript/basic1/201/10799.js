/*
    쇠 막대기
    1. 입력 모듈 선언
    2. solution 호출
        > sticks, cnt 변수 선언
        > line 길이만큼 반복
            > if (인지?
                > sticks에 push
                > 아니면, pop하고 cnt에 sticks 길이 추가
        > cnt 출력
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line);
    rl.close();
});

rl.on("close", () => {
    process.exit();
})

function solution(line) {
    let result = 0;
    let sticks = [];
    let brackets = line.split('');

    for (let i in brackets) {
        if (brackets[i] === '(') {
            sticks.push('-');
            continue;
        } 
        
        sticks.pop();
        
        if (brackets[i - 1] === '(') {
            result += sticks.length;
        } else {
            result++;
        }
    }
    console.log(result);
}