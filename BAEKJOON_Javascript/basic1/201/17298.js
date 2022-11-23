/*
    오큰수 찾기

    1. 입력 모듈 선언
    2. size, nums 선언
    3. line 정의; size가 undeined인지?
        > size 할당
        > 입력 값을 매개로 solution 메소드 호출
    4. solution
        > results 선언
        > size만큼 반복; while(size--);
            > num에 shift 값 할당
            > results에 num 보다 큰 값 할당
        > 출력
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let size;

rl.on("line", (line) => {
    if (size === undefined) {
        size = line;
    } else {
        solution(line);
    }
});

rl.on("close", () => {
    process.exit();
})

function solution(line) {
    let nums = line.split(' ').reverse().map(i => +i);
    let results = [];

    while(size--) {
        let num = nums.pop();
        let nge = -1;

        for (let j = size; j-- > 0;) {
            if (nums[j] > num) {
                nge = nums[j];
                break;
            }
        }
        results.push(nge);
    }

    console.log(results.join(' '));
    rl.close();
}

