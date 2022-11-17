/*
    명령 처리 프로그램 작성
    - push X: 정수 X를 스택에 넣는 연산
    - pop: 스택에서 가장 위 정수를 빼고, 없는 경우 -1 출력
    - size: 스택에 들어있는 정수의 개수 출력
    - empty: 스택이 비어있으면 1, 아니면 0 출력
    - top: 스택의 가장 위에 있는 정수 출력. 정수가 없는 경우 -1 출력

    1. 입력 모듈 선언
    2. stack 배열, cnt 변수 선언
    3. line 정의; length가 0보다 큰지?
        > 아니면 length에 값 할당
        > 맞으면 입력 값을 매개로 command 메소드 호출
    4. command; switch로 로직 수행
        > push x: 공백 다음 숫자를 스택에 추가
            > stack.push(x)
        > pop: 스택 사이즈가 0인지?
            > 맞으면 -1
            > 아니면 스택 사이즈 반환
        > size: stack.size
        > empty: stack.size가 0인지? 1 : 0
        > top: stack.size === 0 ? -1 : stack[stack.length-1] 
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let nums = [];
let result = '';
let cnt;

rl.on("line", (line) => {
    if (cnt === undefined) {
        cnt = line;
    } else {
        stack(line);
        cnt--;
    }

    if (cnt === 0) rl.close();
});

rl.on("close", () => {
    console.log(result);
    process.exit();
})


function stack(command) {
    switch(command) {
        case 'pop':
            result += (nums.length > 0 ? nums.pop() : -1) + '\n';
            break;
        case 'size':
            result += nums.length + '\n';
            break;
        case 'empty':
            result += (nums.length === 0 ? 1 : 0) + '\n';
            break;
        case 'top':
            result += (nums.length > 0 ? nums[nums.length - 1] : -1) + '\n';
            break;
        default:
            let num = command.split(" ")[1];
            nums.push(num);
            break;
    }
}