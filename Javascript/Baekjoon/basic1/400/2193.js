/*
    이친수

    1. 1, 1를 요소로 하는 배열 선언
    2. length가 num 보다 작을 때까지 반복
        > x, y에 pop한 값을 할당
        > 배열에 x, x+y 추가
    3. pop한 값 출력
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(+line);
});

function solution(num) {
    let results = [0, 1];
    
    while (num--) {
        let result = results.at(-1) + results.at(-2);
        results.push(result);
    }

    console.log(results.at(-1));
}

