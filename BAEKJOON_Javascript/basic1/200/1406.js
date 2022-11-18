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

let fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().split("\n");

let leftStr = inputs[0].split("");
let rightStr = [];
let cnt = +inputs[1];

for (let i = 0; i < cnt; i++) {
    solution(inputs[i + 2]);
}
console.log(leftStr.join('') + rightStr.reverse().join(''));

function solution(input) {
    let command = input[0];

    switch (command) {
        case 'L': 
            if (leftStr.length > 0) {
                rightStr.push(leftStr.pop());
            }
            break;
        case 'D':
            if (rightStr.length > 0) {
                leftStr.push(rightStr.pop());
            }
            break;
        case 'B':
            if (leftStr.length > 0) {
                leftStr.pop();
            }
            break;
        default:
            leftStr.push(input[2]);
            break;
    }
}