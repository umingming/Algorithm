/*
    숨바꼭질

    1. 입력 모듈 정의
    2. cnt 변수 선언
    3. cnt가 정의되었는지? 
        > 정의되었으면 solution 호출
    4. solution
        > 입력을 쪼개 숫자 배열에 할당, 절대값이어야 함.
            > 배열 반복
                > if gcd 값이 1이 아닌지?
                    > i와 gcd 의 공배수 구하기
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cnt;
let s;

rl.on("line", (line) => {
    if (cnt === undefined) {
        [cnt, s] = line.split(" ").map(i => +i);
    } else {
        solution(line);
    }
});

function solution(line) {
    const nums = line.split(" ").map(i => Math.abs(+i - s));
    let result = nums[0];

    for (let i of nums) {
        if (result !== i) {
            result = getGCD(result, i);
        }
    }
    console.log(result);
}

function getGCD(x, y) {
    if (x % y === 0) {
        return y;
    }
    return getGCD(y, x % y);
}
