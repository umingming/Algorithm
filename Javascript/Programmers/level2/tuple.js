/*
    중복되는 원소가 없는 튜플 구하기
    
    1. 문자열에서 {, }제거
    2. , 기준으로 문자열 나누고 set 사용해서 중복 없는 값 만들기
*/
function solution(s) {
    const arr = s.split("},{")
                .map(i => i.replaceAll("{", "").replaceAll("}", "").split(","))
                .sort((a, b) => a.length - b.length);
    
    const answer = arr.reduce((acc, cur) => {
        const el = +cur.find(i => !acc.includes(+i));
        acc.push(el);
        return acc;
    }, [])
    return answer;
}