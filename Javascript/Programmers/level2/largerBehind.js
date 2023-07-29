/*
    뒷 큰 수 찾기
    - 이전 요소가 나보다 작은데 larger이 나보다 클 경우 그 값 추가
    
    1. numbers reduce하여 largers 반환
*/
function solution(numbers) {
    const largers = [];
    
    for (let i = 0; i < numbers.length;  i++) {
        let larger = -1;
        let preLarger = largers.at(-1);
        
        if (numbers[i - 1] < numbers[i] && preLarger > numbers[i]) {
            largers.push(preLarger);
            continue;
        }
            
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] > numbers[i]) {
                larger = numbers[j];
                break;
            }
        }
        
        largers.push(larger);
    }
    return largers;
}