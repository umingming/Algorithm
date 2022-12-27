/*
    소수 구하기
    1. 입력 모듈 선언
    2. solution
        > M이 N보다 크지 않을 경우의 반복문
        > M이 PrimeNum이면 출력
    3. isPrimeNum
        > 제곱근까지를 반복했을 때 나누어 떨어지는 값이 있는지? 있으면 true
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
    let [M, N] = line.split(" ").map(i => +i);

    while(M <= N) {
        checkPrimeNum(M++);
    }
}

function checkPrimeNum(num) {
    if (num === 1) return;

    let sqrt = Math.floor(Math.sqrt(num));

    while(sqrt > 1) {
        if (num % sqrt === 0) return;
        sqrt--;
    }
    console.log(num);
}