/*
    부분 수열 찾기
    - 길이가 짧고, 인덱스가 작은 수열이 우선
    
    1. sequence를 k의 부분 수열 정의함.
        1) 이전 요소의 합이 k인 경우: 다음 요소에 cur push
        2) 이전 요소들과 cur의 합이 k인 경우: 요소에 push
        3) 이전 요소들의 합과 cur의 합이 k를 초과하는 경우
            3-1) 처음 index를 제외하고 k가 되는 경우: 0번째 요소 제외하고 push
            3-2) 안 되면 요소 pop()
        4) 현재 요소가 k인 경우
            4-1) 이전 요소의 합이 k인 경우: 새로운 요소에 push
            4-2) 아닌 경우, pop 후 push
    2. 마지막 요소의 길이와 같은 부분 수열 요소가 있는지 확인
    3. 2의 결과로 findIndex 해서 결과 반환
    
*/
function solution(sequence, k) {
    let part = [];
    let partSum = 0;
    const result = [];
    
    while (sequence.length && partSum !== k) {
        const num = sequence.pop();
        part.push(num);
        partSum += num;
        
        if (partSum > k) {
            const num = part.splice(0, 1);
            partSum -= num;
        }
    }
    
    result[0] = sequence.length;
    result[1] = result[0] + part.length - 1;
    
    if (part[0] === part.at(-1)) {
        const index = sequence.findIndex(i => i === part[0]);
        if (index > -1) {
            result[0] = sequence.findIndex(i => i === part[0]);
            result[1] = result[0] + part.length - 1;
        }
    }
    return result;
}