/*
    골드바흐의 추측
    1. line이 0이면 끝
    2. solution
        > index 정하기
        > 값 뺴면서 소수인지 확인
            > 덧셈 형식으로 출력 ex) 8 = 3 + 5
        > 안 되면 골드바우 추측 잘못됐다고 알림
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    if (line == 0) rl.close();
    solution(+line);
});

rl.on("close", () => {
    process.exit();
});

function solution(num) {
    let median = num / 2;
    let x = 3;

    while(x <= median) {
        if (isPrimeNum(x) && isPrimeNum(num - x)) {
        console.log(`${num} = ${x} + ${num - x}`)
            return;
        }
        x++;
    }

    console.log("Goldbach's conjecture is wrong.");
}

function isPrimeNum(num) {
    let x = Math.floor(Math.sqrt(num));

    while(x > 1) {
        if (num % x === 0) return false;
        x--;
    }
    return true;
}