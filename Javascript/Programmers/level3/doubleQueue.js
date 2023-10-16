/*
    queue의 최대 최소값 구하기
    - I 숫자: 숫자 삽입
    - D 1: 최댓값 삭제
    - D -1: 최소값 삭제
    
    1. queue 선언
    2. operate 정의
        1) 인자를 공백 기준으로 나누고 연산에 따른 값을 수행
        2) I면 숫자 삽입
        3) 최댓값 삭제할 경우, 오름차순 정렬 후 pop
        4) 최솟값 삭제할 경우, 내림차순 정렬 후 pop
    
*/
function solution(operations) {
    const queue = [];
    const operate = (command) => {
        const [operation, num] = command.split(" ");
        if (operation === "I") {
            queue.push(num);
        } else  {
            queue.sort((a, b) => (a - b) * num);
            queue.pop();
        }
    }
    operations.forEach(operate);
    
    return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}