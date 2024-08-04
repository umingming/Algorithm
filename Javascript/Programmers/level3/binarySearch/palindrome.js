/*
    1. index 1로 초기화
    2. max = 1;
    3. 좌우 비교
*/
function solution(s) {
    let result = 1;
    
    function validatePalindrome(index) {
        let oddCount = 1;
        let evenCount = 0;
        
        for (let i = 0; i < index; i++) {
            if (s[index - (i + 1)] !== s[index + (i + 1)]) {
                break;
            }
            oddCount += 2;
        }
        
        for (let i = 0; i < index; i++) {
            if (s[index - (i + 1)] !== s[index + i]) {
                break;
            }
            evenCount += 2;
        }
        
        return Math.max(oddCount, evenCount);
    }
    
    for (let i = 1; i < s.length - 1; i++) {
        const target = validatePalindrome(i);
        result = Math.max(result, target);
    }
    
    return result;
}
