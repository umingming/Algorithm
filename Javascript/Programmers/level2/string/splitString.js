/*  
    문자열 압축
    최소값 보장
    
    1. 최대 압축 값 정의; s / 2
    2. 문자열을 갯수만큼 잘라서 반환해주는 함수 정의
    3. 최대 압축 값 까지 for 반복
        > 가능한 문자열 push
    4. 제일 작은 length 반환
*/
function solution(s) {
    function splitBy(length) {
        const rest = s.length % length;
        const pattern = new RegExp(`[a-z]{${length}}`, "g");
        const splits = s.match(pattern);
        
        if (rest) {
            return [...splits, s.substr(-rest)];
        }
        return splits;
    }
    const max = Math.floor(s.length / 2);
    const lengthes = [];
    
    for (let i = 1; i <= max; i++) {
        const splits = splitBy(i);
        const [string, rest, count] = splits.reduce((acc, cur) => {
            if (acc[1] !== cur) {
                acc[0] += (acc[2] + acc[1]);
                acc[1] = cur;
                acc[2] = "";
            } else {
                acc[2] = acc[2] ? ++acc[2] : 2;
            }
            
            return acc;
        }, ["", "", ""])
        
        const { length } = string + count + rest;
        lengthes.push(length)
    }
    
    return Math.min(...lengthes, s.length)
}