/*
    최소공배수 합 구하기

    1. 입력 모듈 정의
    2. cnt 변수 선언
    3. cnt가 정의되었는지? 
        > 정의되었으면 solution 호출
    4. solution
        > 입력을 쪼개 숫자 배열에 할당
            > 1부터 반복
                > 인덱스보다 큰 수 반복
                    > gcd 구하기
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
    const nums = line.split(' ').map(i => +i);
    let result = 0;

    for (let i = 1; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            result += getGCD(nums[i], nums[j]);
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
