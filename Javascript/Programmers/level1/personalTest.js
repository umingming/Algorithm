/*
    성격 유형 검사
    -사전 순으로 빠른 성격 유형
    
    1. 성격 유형 객체 배열 정의
    2. survey 반복하며 choices로 객체 배열에 값 할당
    3. 둘 중 큰 값을 반환
*/
function solution(survey, choices) {
    const personals = [
        { R: 0, T: 0 },
        { C: 0, F: 0 },
        { J: 0, M: 0 },
        { A: 0, N: 0 },
    ]
    
    for (let i = 0; i < survey.length; i++) {
        const personal = personals.find(personal => personal.hasOwnProperty(survey[i][0]));
        const point = choices[i] - 4;
        if (point > 0) {
            personal[survey[i][1]] += point;
        } else if (point < 0) {
            personal[survey[i][0]] -= point;
        }
    }
    
    return personals.reduce((acc, cur) => {
        const [before, after] = Object.entries(cur);
        const personal = before[1] < after[1] ? after[0] : before[0];
        acc.push(personal);
        return acc;
    }, []).join("");
}