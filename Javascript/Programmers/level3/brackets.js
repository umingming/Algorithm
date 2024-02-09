/*
    괄호 회전하기
    
    1. 여는 괄호 닫는 괄호 배열 정의
    2. 여는 괄호부터 시작하도록 문자열 초기화
    3. 인자로 받은 괄호들을 쪼개 재귀적으로 올바른지 확인하는 함수 정의
        > 첫 번째가 여는 문자열인지 확인
        > 1번째 인덱스부터 닫기 문자열 기준으로 쪼개기
        > 쪼갠 문자열의 길이가 0이상이면 해당 함수 호출하여 밸리데이션
        > 결과 반환
    4. 위의 함수를 통과했는지? 안 했으면 0
    5. 이제 괄호 배열 새로 정의 해서 갯수 반환
*/
function solution(s) {
    const opens = ["(", "[", "{"];
    const closes = [")", "]", "}"];
    const bracketMap = opens.reduce((acc, cur, index) => {
        acc[cur] = closes[index];
        return acc;
    }, {})
    const start = s.search(/\(|\[|{/);
    
    if (start === -1) return 0;
    
    s = s.substring(start) + s.substring(0, start);
    
    function validateBrackets(brackets) {
        if (!brackets.length) return true;
        
        const open = brackets[0];
        if (!opens.includes(open)) return false;
        
        const closeIndex = brackets.indexOf(bracketMap[open]);
        if (closeIndex === -1) return false;
        
        const prefix = brackets.substring(1, closeIndex);
        const suffix = brackets.substring(closeIndex + 1);
        
        return [prefix, suffix].every(validateBrackets);
    }
    
    if (!validateBrackets(s)) return 0;
    
    let result = 0;
    
    while (s.length) {
        const index = s.indexOf(bracketMap[s[0]]);
        s = s.substring(index + 1);
        result++;
    }
    
    return result;
}