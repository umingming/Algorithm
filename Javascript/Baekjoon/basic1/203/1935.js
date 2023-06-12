/*
    후위 표기식
    1. 입력 모듈 선언
    2. 입력 메소드
        > expression, result, cnt 변수 선언
    3. solution 
        > nums에 추가
        > --cnt 조건으로 false이면 수행
            > expression 글자 수 반복
            > 글자를 코드로 바꾸고 65를 뺀 값이 0이상 인지?
                > 해당 값을 index로 result에 push
                > 아니면 result의 가장 밖 두 자리를 pop 후 연산
        
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cnt;
let expression;
let nums = [];
let results = [];

rl.on("line", (line) => {
    if (cnt === undefined) {
        cnt = +line;
    } else if (expression === undefined) {
        expression = line;
    } else {
        solution(line);
    }
});

rl.on("close", () => {
    process.exit();
})

function solution(line) {
    nums.push(+line);

    if (--cnt) return;

    for (let char of expression) {
        let index = char.charCodeAt(0) - 65;

        if(index < 0) {
            calculate(results.pop(), char, results.pop());
        } else {
            results.push(nums[index]);
        }
    }

    console.log(results[0].toFixed(2));
    rl.close();
}

function calculate(y, operation, x) {
    let result = eval(`${x} ${operation} ${y}`);
    results.push(result);
}