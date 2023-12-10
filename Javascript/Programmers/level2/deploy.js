/*
    기능 개발
    - 빨리 끝나도 앞 기능이 배포 안 되면 대기
    
    1. progresses를 reduce하여 results 배열 정의
        > 100 - progress를 speed로 나눈 값의 올림을 변수로 선언
        > 이전 요소의 결과값이 더 크면 교체
        > 크지 않으면 resultSet에 추가
    2. resultSet을 배열로 변환 후 map하여 반환
        > 기준 값이 results에 포함되는 갯수
*/
function solution(progresses, speeds) {
    const resultSet = [];
    const results = progresses.reduce((acc, cur, index) => {
        const result = Math.ceil((100 - cur) / speeds[index]);
        const preResult = acc.at(-1) ?? 0;
        if (preResult >= result) {
            acc.push(preResult);
        } else {
            resultSet.push(result);
            acc.push(result);
        }
        return acc;
    }, [])
    
    return resultSet.map(i => results.filter(result => result === i).length);
}