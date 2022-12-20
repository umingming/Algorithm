/*
    후위 표기식
    1. 입력 모듈 선언
    2. 입력 메소드
        > solution 호출
    3. solution 
        > line 글자 수 반복
            > *, /: flag true
            > ~ +, -: opearator push
            > (: flag false
            > ): opearator pop
            > 문자는 result 추가
        
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line);
});

rl.on("close", () => {
    process.exit();
})

function solution(line) {
    let flag = false;
    let opearators = [];
    let result = ""

    for (let char of line) {
        switch (char) {
            case '*', '/':
                flag = true;
            case '+', '-':
                opearators.push(char);
                break;
            case '(':
                flag = false;
                break;
            case ')':
                while(opearators.length) {
                    result += opearators.pop();
                }
                break;
            default :
                result += char;
        }

    }
    while(opearators.length) {
        result += opearators.pop();
    }
    console.log(result);
    rl.close();
}
