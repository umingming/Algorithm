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
    let leftNums = line.split(' ');
    let nums = [];
    let results = [];

    while(leftNums.length) {
        let leftNum = leftNums.pop();
        nums.push(leftNum);

        let rightNums = [ ...nums ];
        let nge = -1;
        
        while(rightNums.length) {
            let rightNum = rightNums.pop();

            if (leftNum < rightNum) {
                nge = rightNum;
                break;
            }
        }
        results.push(nge);
    }

    console.log(results.reverse().join(' '));
    rl.close();
}

