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
    const largers = numbers.map((num, index) => {
        const larger = numbers.slice(index + 1).find(i => i > num) ?? -1;
        return larger;
    })
    return largers;
}