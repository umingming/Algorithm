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

let cnt;
let leftStr;
let rightStr = [];

rl.on("line", (line) => {
    if (leftStr === undefined) {
        leftStr = line.split('');
    }
    if (cnt === undefined) {
        cnt = line;
    } else {
        solution(line);
        cnt--;
    }

    if (cnt === 0) rl.close();
});

rl.on("close", () => {
    console.log(leftStr.join('') + rightStr.join(''));
    process.exit();
});

function solution(line) {
    let command = line[0];

    switch (command) {
        case 'L': 
            if (leftStr.length > 0) {
                rightStr.unshift(leftStr.pop());
            }
            break;
        case 'D':
            if (rightStr.length > 0) {
                leftStr.push(rightStr.shift());
            }
            break;
        case 'B':
            if (leftStr.length > 0) {
                leftStr.pop();
            }
            break;
        case 'P':
            let input = line[2];
            leftStr.push(input);
            break;
    }
}