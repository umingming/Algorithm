/*
    가장 긴 증가하는 부분 수열

    1. 배열 선언
    2. 입력 배열을 순회
        > i를 요소로하는 배열 선언
        > 남은 배열 반복
            > 배열의 마지막 요소가 j보다 작을 경우만 push
        > 기준 배열보다 큰지? 교체함.
        > 배열의 길이가 남은 수보다 큰지? 멈춤
    3. 배열 길이 출력
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cnt;

rl.on("line", (line) => {
    if (cnt === undefined) {
        cnt = line;
    } else {
        solution(line);
    }
});

function solution(line) {
    let seq = line.split(" ").map(i => +i);
    let result = [];

    for (i = 0; i < seq.length; i++) {
        let temp = [seq[i]];
        
        for (j = i + 1; j < seq.length; j++){
            if (temp[temp.length-1] < seq[j]) {
                temp.push(seq[j]);
            }
        }

        if (temp.length > result.length) {
            result = temp;
        }

        if (result.length > seq.length - i - 1) {
            break;
        }
    }

    console.log(result.length);
}