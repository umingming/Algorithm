/*
    1. left, right 배열 정의
    2. left, right 둘 중 값이 있을 떄까지 반복
        > left의 마지막과, right의 마지막이 같으면 둘 다 pop해서 제거
        > 안 같으면 right으로 이동
    3. left에 값이 남으면 실패
*/
function solution(s) {
    const left = s.split("");
    const right = [];
    
    while (left.length) {
        const target = left.pop();
        if (target === right.at(-1)) {
            right.pop();
        } else {
            right.push(target);
        }
    }
    
    return right.length > 0 ? 0 : 1;
}