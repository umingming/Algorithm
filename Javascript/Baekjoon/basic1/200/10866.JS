/*
    덱 구현

    1. 입력 모듈 선언
    2. deque 배열, cnt 변수, result 배열 선언
    3. line 정의; cnt가 undeined인지?
        > cnt 할당
        > 입력 값을 매개로 solution 메소드 호출
    4. solution; switch로 로직 수행
        > command = line을 공백으로 쪼갠 0번째 요소
        > push_front: 제일 처음 요소에 num 추가, unshift
        > push_back: 제일 마지막 요소에 num 추가, push
        > pop_front; !isEmpty? 제일 처음 요소 제거, shift
        > pop_back; !isEmpty? 제일 마지막 요소 제거, pop
        > size; length 반환
        > empty; isEmpty? 1 : 0
        > front; !isEmpty? deque[0] 
        > back; !isEmpty? deque[마지막]
    5. isEmpty; 빈 값 확인
    
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cnt;
let nums = [];
let results = [];

rl.on("line", (line) => {
    if (cnt === undefined) {
        cnt = line;
    } else {
        deque(line);
        cnt--;
    }

    if (cnt === 0) rl.close();
});

rl.on("close", () => {
    console.log(results.join('\n'));

    process.exit();
})

function deque(line) {
    let command = line.split(' ')[0];
    let num = line.split(' ')?.[1];
    let result;

    switch(command) {
        case 'push_front':
            nums.unshift(num)
            return;
        case 'push_back':
            nums.push(num);
            return;
        case 'size':
            result = nums.length;
            break;
        case 'empty':
            result = isEmpty() ? 1 : 0;
            break;
        case 'pop_front':
            result = !isEmpty() ? nums.shift() : -1;
            break;
        case 'pop_back':
            result = !isEmpty() ? nums.pop() : -1;
            break;
        case 'front':
            result = !isEmpty() ? nums[0] : -1;
            break;
        case 'back':
            result = !isEmpty() ? nums[nums.length - 1] : -1;
            break;
    }

    results.push(result);
}

function isEmpty() {
    let size = nums.length;

    return (size === 0) ? true : false;
}