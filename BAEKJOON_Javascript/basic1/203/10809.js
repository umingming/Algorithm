/*
    알파벳 찾기

    1. 입력 모듈 정의
    2. solution
        > 길이가 26인 indexes 배열 생성
        > 배열의 값을 -1로 초기화
        > line 글자 수 반복; 기본 for문
            > 글자를 아스키코드로 바꾼 값을 인덱스
            > if 해당 인덱스의 배열 요소가 -1이 아닌지?
                > 요소를 i로 치환
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
    let indexes = new Array(26);
    indexes.fill(-1);

    for (let i = 0; i < line.length; i++) {
        let index = line.charCodeAt(i) - 97;

        if (indexes[index] === -1) {
            indexes[index] = i;
        }
    }

    console.log(indexes.join(' '));
}