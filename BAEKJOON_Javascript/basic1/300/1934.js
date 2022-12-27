/*
    최소공배수 구하기

    1. 입력 모듈 정의
    2. cnt 변수 선언
    3. cnt가 정의되었는지? 
        > 정의되었으면 solution 호출
    4. solution
        > 입력을 쪼개 숫자 변수에 할당
        > gcd 구하기
        > lcd 구해서 출력
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
    const [x, y] = line.split(' ').map(i => +i);
    const gcd = getGCD(x, y);
    const lcm = x * y / gcd

    console.log(lcm);
}

function getGCD(x, y) {
    if (x % y === 0) {
        return y;
    }
    return getGCD(y, x % y);
}
