/*
    문자열 분석

    1. 입력 모듈 정의
    2. solution
        > nums, lowers, uppers, blanks 변수 선언
            > \d, a-z, A-Z, \s
        > 해당 배열 길이 출력
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
    let cntLower = getCnt(/[a-z]/g);
    let cntUpper = getCnt(/[A-Z]/g);
    let cntNums = getCnt(/[\d]/g);
    let cntBlanks = getCnt(/[\s]/g);

    console.log(`${cntLower} ${cntUpper} ${cntNums} ${cntBlanks}`);

    function getCnt(regExp) {
        return line.match(regExp)?.length ?? 0;    
    }
}