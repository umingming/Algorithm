/*
    뒤에 있는 큰 수 찾기
    - 없을 경우 -1
    
    1. for문 numbers 크기 반복
        1) i보다 index가 크며, 값이 큰 요소 할당
        2) 없을 경우 -1
    2. 해당 answer 반환
        
*/
function solution(numbers) {
    const answer = [];
    
    for (let i = 0; i < numbers.length; i++) {
        const larger = numbers.find((num, index) => {
            return num > numbers[i] && index > i
        }) ?? -1;
        answer.push(larger);
    }
    return answer;
}