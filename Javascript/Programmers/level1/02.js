/*
    추억 점수 반환
    - name 과 yearning은 대칭
    - 그립지 않은 사람도 있음.

    1. name을 key, yearning을 value로 하는 yearning객체 생성
    2. photo map으로 변환해 result에 담음
        1) 존재하는 사람들의 합을 반환
        2) 그립지 않을 경우 0점 처리
*/
function solution(name, yearning, photo) {
    const yearningByName = name.reduce((acc, cur, i) => {
        acc[cur] = yearning[i];
        return acc;
    }, {});

    const getTotalYearning = (names) => 
        names.reduce((acc, cur) => acc + (yearningByName[cur] ?? 0), 0);

    return photo.map(names => getTotalYearning(names));
}