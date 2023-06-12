/*
    1, 2, 3 더하기

    1. [1, 1, 2]를 요소로 하는 배열 선언
    2. length가 num보다 작을 때 반복
        > length-1, -2, -3 더해서 push
    3. num을 index로 하는 요소 출력
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cnt;
let results = [1, 1, 2];

rl.on("line", (line) => {
    if (cnt === undefined) { 
        cnt = +line;
    } else {
        solution(+line);
    }
});

function solution(num) {
    while (results.length <= num) {
        let result = results.at(-1) + results.at(-2) + results.at(-3);
        results.push(result);
    }

    console.log(results[num]);
}

