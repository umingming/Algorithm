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
    const [min, max] = line.split(" ").map(i => +i);
    let nums = [...Array(max - min + 1).keys()].map(i => min + i);

    let quotient = 1;
    let sqrt = Math.floor(Math.sqrt(max));
    
    while (quotient++ < sqrt) {
        nums = nums.filter(i => i === quotient || i % quotient);
    }

    console.log(nums.filter(i => i != 1).join(' '));
}
