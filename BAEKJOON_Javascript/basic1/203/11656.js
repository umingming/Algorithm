/*
    접미사 배열 구하기

    1. 입력 모듈 정의
    2. solution
        > 접미사 배열(suffixes) 선언 
        > 문자열 반복
            > 해당 인덱스부터 시작하는 문자열을 배열에 추가
        > 배열 정렬
        > 출력
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
    let suffixes = [];
    
    for (let i = 0; i < line.length; i++) {
        let suffix = line.substring(i);
        suffixes.push(suffix);
    }
    suffixes.sort();

    console.log(suffixes.join('\n'));
}
