/*
    Queue 구현

    1. 입력 모듈 정의
    2. cnt, queue, result
    3. if cnt가 undefined인지?
        > cnt에 line 할당
        > 아니면 solution 호출
    4. solution
        > line을 공백 기준으로 쪼개 0번째 인덱스로 command 변수 선언
        > switch문(command)
            > push; queue에 1번째 인덱스 push
            > pop; 첫 번째 요소 pop
                > !isEmpty? result에 첫 번째 요소 추가 후, splice로 삭제
            > size; length 추가
            > empty; (!isEmpty) result에 0 추가
            > front; !isEmpty? 첫번째 요소 추가
            > back; !isEmpty? 마지막 요소 추가
    5. isEmpty; 사이즈가 0인지
        > -1을 result에 추가 후 return
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cnt;
let queue = [];
let results = [];

rl.on("line", (line) => {
    if (cnt === undefined) {
        cnt = line;
    } else {
        solution(line);
        cnt--;
    }

    if (cnt === 0) rl.close();
});

rl.on("close", () => {
    console.log(results.join('\n'));
    process.exit();
});

function solution(line) {
    let command = line.split(' ')[0];

    switch (command) {
        case 'push': 
            let num = line.split(' ')[1];
            queue.push(num);
            break;
        case 'pop':
            if (!isEmpty()) {
                results.push(queue[0]);
                queue.splice(0, 1);
            }
            break;
        case 'size':
            results.push(queue.length);
            break;
        case 'empty':
            if (!isEmpty(1)) results.push(0);
            break;
        case 'front':
            if (!isEmpty()) results.push(queue[0]);
            break;
        case 'back':
            if (!isEmpty()) results.push(queue[queue.length - 1]);
            break;
    }
}

function isEmpty(result = -1) {
    let size = queue.length;
    
    if (size === 0) {
        results.push(result);
        return true;
    }
    return false;
}