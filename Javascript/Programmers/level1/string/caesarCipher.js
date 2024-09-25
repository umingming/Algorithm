/*
    charCodeAt <-> String.fromCharCode 시저 암호 유니코드 변환
    
    1. 문자 기준 암호화하는 함수 정의
        > 문자가 공백이면? 공백 반환
        > 문자의 charCode 를 정의
        > 해당 코드의 + n값이 Z 보다 크고 a보다 작으면 Z른 뺀 값을 A에서 더해서 갖기
        > 위 값이 z보다 크면 마찬가지로 z를 뺀 값을 a에서 더해 반환
    2. n을 문자열 기준으로 쪼개서 map한 후 join해서 반환
*/
function solution(s, n) {
    const codeConfig = {
        a: "a".charCodeAt(),
        z: "z".charCodeAt(),
        A: "A".charCodeAt(),
        Z: "Z".charCodeAt(),
    }
    
    function transformCode(char) {
        if (char === " ") {
            return char;
        }
        
        let code = char.charCodeAt() + n;
        
        // Z는 90, a는 97이라 대소문자 확인 필요
        if (/[A-Z]/.test(char) && code > codeConfig.Z) {
            code = code - codeConfig.Z + codeConfig.A - 1;
        } else if (code > codeConfig.z) {
            code = code - codeConfig.z + codeConfig.a - 1;
        }
        
        return String.fromCharCode(code);
    }
    
    const result = s.split("").map(char => transformCode(char)).join("");
    return result;
}