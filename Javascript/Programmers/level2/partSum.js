/*
    연속 부분 수열 합의 갯수 구하기
    - Set 사용
    
    1. 1부터 elements 크기만큼 반복
    2. i를 길이로 하는 부분 수열의 합을 set에 추가
    3. set의 갯수 반환
*/
function solution(elements) {
    const sumSet = new Set();
    
    /*
        길이를 인자로 부분 수열의 합들 구하기
        
        1. 요소 기본 for문으로 반복
        2. if 길이 - i > 인자 - 1인지?
            > 요소를 인덱스부터 인자까지 slice한 배열의 합 결과에 추가
        3. 요소를 인덱스부터 끝까지 slice한 배열과 0부터 i - 인자 slice한 배열의 합 결과에 추가
    */
    function validateSums(length) {
        for (let i = 0; i < elements.length; i++) {
            let part = [];
            const endIndex = i + length;
            
            if (elements.length - i > length - 1) {
                part = elements.slice(i, endIndex);
            } else {
                part = [...elements.slice(i), ...elements.slice(0, i - endIndex)]
            }
            
            sumSet.add(part.reduce((acc, cur) => acc + cur, 0));
        }
    }
    
    for (let i = 1; i <= elements.length; i++) {
        for 
        validateSums(i);
    }
    
    const {size} = sumSet;
    return size;
}