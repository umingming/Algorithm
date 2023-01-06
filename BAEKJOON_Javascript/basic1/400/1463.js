/*
    1로 만들기
    - /3, /2, --만 사용해서 1 만들기
   

    1. result 변수에 0 할당
    2. 1이 될 때까지 반복 num > 1
        > if 3으로 나누어 떨어지는지? /3
        > else if 2로 나누어 떨어지며 -1을 3으로 나누어 떨어지지 않는지? /2
        > else --1
        > result++
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
    let result = 0;
    while (num > 1) {
        if (!(num % 3)) num /= 3;
        else if (!(num % 2) && ((num - 1) % 9)) num /= 2;
        else num--;

        result++;
    }

    console.log(result);
}