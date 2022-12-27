/*
    소수 찾기
    1. 입력 모듈 선언
    2. solution
        > 입력을 쪼개 배열에 할당
        > 배열 값 반복
        > isPrimeNum을 조건으로 result++
    3. isPrimeNum
        > 제곱근까지를 반복했을 때 나누어 떨어지는 값이 있는지? 있으면 true
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cnt;
rl.on("line", (line) => {
    if (cnt === undefined) {
        cnt = +line;
    } else {
        solution(line);
    }
});

function solution(line) {
    const nums = line.split(" ").filter(i => i != 1 && isPrimeNum(+i));

    console.log(nums.length);
}

function isPrimeNum(num) {
    let sqrt = Math.floor(Math.sqrt(num));

    while(sqrt > 1) {
        if (num % sqrt === 0) return false;
        sqrt--;
    }
    return true;
}