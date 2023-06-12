/*
    골드바흐 파티션

    1. 입력값을 쪼개 n, b에 할당
    2. toString 사용해 진법 변환 후 대문자 출력
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
    const [n, b] = line.split(" ").map(i => +i);

    const result = n.toString(b).toUpperCase();
    console.log(result);
}
