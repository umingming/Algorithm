/*
    골드바흐 파티션

    1. 입력 모듈 정의
    2. cnt 변수 선언
    3. cnt가 정의되었는지? 
        > 정의되었으면 solution 호출
    4. solution
        > 입력을 반으로 나눠 중앙 값 변수 선언
        > x가 중앙 값보다 클 때까지 반복
            > if x가 소수인지? num-x가 소수인지?
                > cnt ++
        > cnt 호출
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

function solution(num) {
    const median = num / 2;
    let x = 3;
    let cnt = 0;

    while (x <= median) {
        if (isPrimeNum(x) && isPrimeNum(num - x)) {
            cnt++;
        }
        x++;
    }

    console.log(cnt);
}

function isPrimeNum(num) {
    let x = Math.floor(Math.sqrt(num));

    while(x > 1) {
        if (num % x === 0) return false;
        x--;
    }
    return true;
}
