/*
    2 x n 타일링
    - 10007로 나눈 나머지

    1. 1, 2를 요소로 하는 배열 선언
    2. length가 num 보다 작을 때까지 반복
        > x, y에 pop한 값을 할당
        > 배열에 x, x+y 추가
    3. pop한 값을 10007로 나눈 나머지 출력
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
    let result = [1, 1];
    let cnt = num - 1;
    
    while (cnt--) {
        let x = result.pop();
        let y = x + result.pop();
        
        result.push(x);
        result.push(y % 10007)
    }

    console.log(result.pop());
}

