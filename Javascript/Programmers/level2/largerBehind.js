/*
    뒷 큰 수 찾기
    - 이전 요소가 나보다 작은데 larger이 나보다 클 경우 그 값 추가
    
    1. numbers reduce하여 largers 반환
*/
function solution(numbers) {
    const largers = [];
    
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const prevNum = numbers[i - 1];
        const prevLarger = largers.at(-1);
        let larger = -1;
        
        if (prevNum <= num && (prevLarger > num || prevLarger === -1)) {
            largers.push(prevLarger);
            continue;
        }
            
        for (let j = i + 1; j < numbers.length; j++) {
            const nextNum = numbers[j];
            if (nextNum > num) {
                larger = nextNum;
                break;
            }
        }
        
        largers.push(larger);
    }
    return largers;
}