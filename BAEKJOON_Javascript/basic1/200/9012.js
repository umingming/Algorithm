/*
    올바른 괄호 문자열 판단 프로그램
    - 입력 값을 YES or NO로 판단

    1. 입력 모듈 정의
    2. cnt, result
    3. if cnt가 undefined인지?
        > cnt에 line 할당
        > 아니면, isVps에 따라 result에 데이터 추가 후 cnt--;
    4. isVps
        > if 첫 번째 글자가 ')'인지? return false
        > 각 괄호의 갯수를 구해 right/leftVsCnt에 할당
        > if 괄호의 갯수가 다른지? retrun false
        > return true
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cnt;
let results = [];

rl.on("line", (line) => {
    if (cnt === undefined) {
        cnt = line;
    } else {
        let result = isVps(line) ? 'YES' : 'NO';
        results.push(result);
        cnt--;
    }

    if (cnt === 0) rl.close();
});

rl.on("close", () => {
    console.log(results.join('\n'));
    process.exit();
});

function isVps(line) {
    if (line[0] === ')') return false;
    if (line[line.length - 1] === '(') return false;

    let leftVsCnt = 0;

    for (let vs of line.split('')) {
        vs === '(' ? leftVsCnt++ : leftVsCnt--;
        if (leftVsCnt < 0) return false;
    }

    return leftVsCnt === 0 ? true : false;
}