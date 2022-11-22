/*
    요세푸스 수열

    1. 입력 모듈 선언
    2. results 배열 선언
    3. line 정의
        > solution 메소드 호출
        > close
    4. solution
        > 공백을 기준으로 쪼개 n과 k 변수에 대입
        > index 변수에 k - 1 저장
        > n 만큼의 배열 생성
        > for문 n 반복
            > if index + k 가 배열보다 큰지? 
                > index = length - (index + k) : index + k
            > index 번째 요소를 제거하고, result에 넣음
            > index + k
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let results = [];

rl.on("line", (line) => {
    solution(line);
    rl.close();
});

rl.on("close", () => {
    console.log(`<${results.join(', ')}>`);

    process.exit();
})

function solution(line) {
    let n = line.split(' ')[0];
    let k = line.split(' ')[1] - 1;
    let nums = [];
    index = k;

    for (let i = 0; i < n; i++) {
        nums.push(i + 1);
    }

    for (let i = 0; i < n; i++) {
        console.log(index, nums.length);
        
        if (index >= nums.length) {
            index -= nums.length;
        }

        console.log(index, nums.length);

        results.push(nums[index]);
        nums.splice(index, 1);

        index += k;
    }
}
