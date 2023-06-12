/*
    네수

    1. 입력 모듈 정의
    2. solution
        > 입력을 쪼개 nums 배열에 넣기
        > 앞의 두 수와, 뒤의 두 수를 더한 값을 더해 result 변수에 할당
        > 출력
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
    let nums = line.split(' ');
    let result = Number(nums[0] + nums[1]) + Number(nums[2] + nums[3]);

    console.log(result);
}
