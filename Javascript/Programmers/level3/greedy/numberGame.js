/*
    숫자 게임
    - 해당 값보다 큰 값이 있는지?
    
    1. b를 작은 순으로 정렬함.
    2. a reduce
        1) findIndex로 a보다 큰 값 찾음.
        2) 있을 경우만 ++
*/
function solution (a, b) {
    let answer = 0;
    b.sort((a, b) => b - a); //내리마순
    a.sort((a, b) => a - b); //오름차순
    
    for (const numA of a) {
        let numB = b.pop();
        while (numB && numB <= numA) {
            numB = b.pop();
        }
        
        if (numB) answer++;
    }
    return answer;
}