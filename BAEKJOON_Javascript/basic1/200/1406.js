/*
    에디터 프로그램

    1. 입력 모듈 정의
    2. cnt, str, index, stack
    3. if str가 undefined인지?
        > str에 line 할당
        > str의 길이를 index에 저장
        > str의 글자를 쪼개 stack 배열에 저장
    4. if cnt가 undefined인지? 
        > cnt에 line 할당
    5. solution
        > line의 0번째 인덱스로 command 변수 선언
        > switch문(command)
            > L; index--
            > D; index++
            > B; index - 1 요소 삭제 후, index--
            > default; index번째 요소에 line[3] 대입
*/


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let str;
let cnt;
let index = 0;
let stack = [];

rl.on("line", (line) => {
    if (str === undefined) {
        str = line;
        index = str.length;
        stack = str.split('');
    } else if (cnt === undefined) {
        cnt = line;
    } else {
        solution(line);
        cnt--;
    }

    if (cnt === 0) rl.close();
});

rl.on("close", () => {
    console.log(stack.join(''));
    process.exit();
});

function solution(line) {
    let command = line[0];
    let input = line[2];

    switch (command) {
        case 'L': 
            index--;
            break;
        case 'D':
            index++;
            break;
        case 'B':
            stack.splice(index - 1, 1);
            index--;
            break;
        default:
            stack.splice(index, 0, input);
            index++;
    }
}