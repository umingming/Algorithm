/*
    괄호 변환
    1. 올바른 문자열 만드는 함수 정의
    2. 1의 함수를 재귀적으로 호출해 결과 반환
*/
function solution(p) {
    /*
        문자열을 올바르게 변환
        1. 두 괄호의 갯수가 같아지는 index 기준으로 분리
        2. v를 인자로 재귀 호출 후 결과 변수에 할당
        3. if u가 올바른지? u+v 반환
            > "("로 시작하고 ")"로 끝나는지
        4. ( + v + ) + u.slice(1, u.length - 1).map(방향 바꾸기) 반환
    */
    function validateBracket(p) {
        if (!p.length) return "";
        
        let [u, v] = p.split("").reduce((acc, cur) => {
            const { length } = acc[0].filter(bracket => bracket === "(");
            if (length && length === acc[0].length / 2) {
                acc[1].push(cur);
            } else {
                acc[0].push(cur);
            }
            return acc;
        }, [[], []]);
        v = validateBracket(v.join(""));
        
        if (u[0] === "(" && u.at(-1) === ")") return u.join("") + v;
        const reverseConfig = { "(": ")", ")": "("};
        return `(${v})` + u.slice(1, u.length - 1)
                            .map(bracket => reverseConfig[bracket])
                            .join("");
    }
    
    return validateBracket(p);
}