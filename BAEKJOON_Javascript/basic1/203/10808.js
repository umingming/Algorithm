/*
    에디터 프로그램

    1. 입력 모듈 정의
    2. solution
        > 길이가 26인 lowerCnt 배열 생성
        > line 글자 수 반복
            > 글자를 아스키코드로 바꾼 값을 인덱스로 배열 ++
        > 배열 join해서 출력
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
});

function solution(line) {
    let lowerCnt = new Array(26);
    lowerCnt.fill(0);

    for (let char of line) {
        let index = char.charCodeAt(0) - 97;
        lowerCnt[index]++;
    }

    console.log(lowerCnt.join(' '));
}