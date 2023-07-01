/*
    유저 별 신고 처리 결과 횟수 구하기
    - 중복 신고 접수는 안 됨.
    
    1. id_list를 Object로 만들어 유저 별 신고한 사용자 배열과, 신고 당한 횟수를 객체로 정의
    2. report 반복하며 1의 값 수정
*/
function solution(id_list, report, k) {
    const reportMap = id_list.reduce((acc, cur) => ({...acc, [cur]: []}), {});
    const blackMap = id_list.reduce((acc, cur) => ({...acc, [cur]: 0}), {});
   
    new Set([...report]).forEach(i => {
        const [user, black] = i.split(" ");
        reportMap[user].push(black);
        ++blackMap[black];
    });
    
    return id_list.reduce((acc, cur) => {
        const result = reportMap[cur]?.filter(i => blackMap[i] >= k).length ?? 0;
        acc.push(result)
        return acc;
    }, []);
}