/*
    발음하는 갯수 구하기
    - 연속되는 발음 안 됨.
    
    1. 정규식 정의; 주어진 값만 사용, 연달아 쓰는 경우
    2. for babbling으로 반복
        1) 통과하면 count++
*/
function solution(babbling) {
    function areWordsValid(words) {
        const pattern = /^(aya|ye|woo|ma)+$/
        return pattern.test(words);
    }
    function areWordsConsecutive(words) {
        const pattern = /(aya){2}|(ye){2}|(woo){2}|(ma){2}/
        return pattern.test(words);
    }
    
    const result = babbling.filter(i => areWordsValid(i) && !areWordsConsecutive(i)).length;
    return result;
}