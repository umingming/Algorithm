/*
    동일 문자 인덱스 배열 반환
    
    1. s를 쪼개서 chars 배열 정의
    2. indexMap 객체 선언
    3. chars map으로 변환하여 result에 할당
        1. 해당 글자가 indexMap에 없는지? -1
        2. 있을 경우 index - value 반환하고, map에 현재 인덱스 할당
    4. result 리턴
        
*/
function solution(s) {
    const chars = s.split("");
    const indexMap = {};
    const result = chars.map((char, i) => {
        const value = indexMap[char];
        indexMap[char] = i;
        return value ? i - value : -1;
    })
    return result;
}