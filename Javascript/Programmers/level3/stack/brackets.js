/*
    괄호 회전하기
    
    1. 여는 괄호, 닫는 괄호 배열, map 정의
    2. stack 배열 정의, result 변수
    3. 여는 괄호부터 시작하도록 문자열 초기화
    4. 문자열 쪼개서 for 문으로 반복
        > 열기 문자열인지? 짝 맞춰서 stack에 닫기 괄호 push
        > 닫기 문자열인지? pop 해서 같은 값인지 확인
            > 아니면 바로 0
        > stack 확인하고 비어있으면 result++;
*/
function solution(s) {
    const opens = ["(", "[", "{"];
    const closes = [")", "]", "}"];
    const bracketMap = opens.reduce((acc, cur, index) => {
        acc[cur] = closes[index];
        return acc;
    }, {})
    
    let result = 0;
    
    function validateBracket(brackets) {
        const stack = [];
        while (brackets.length) {
            const bracket = brackets.pop();
            if (closes.includes(bracket)) {
                stack.push(bracket);
            } else if (bracketMap[bracket] === stack.at(-1)) {
                stack.pop();
            } else {
                return false;
            }
        }
        
        return !stack.length;
    }
    
    for (let i = 0; i < s.length; i++) {
        const brackets = s.substring(i) + s.substring(0, i);
        
        if (validateBracket(brackets.split(""))) {
            result++;
        }
    }
    
    return result;
}