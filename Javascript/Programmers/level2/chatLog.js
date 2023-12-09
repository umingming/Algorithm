/*
    채팅방
    - 최종 닉네임만 기록하면 됨.
    
    1. record를 공백 기준으로 쪼개서 수행, 아이디, 닉네임 배열로 만들기
    2. 유저 닉네임 정의
    3. recordList 문자열로 만들기
*/
function solution(records) {
    const recordList = records.map(record => record.split(" "));
    const userConfig = recordList.reduce((acc, [_, id, name]) => {
        acc[id] = name ?? acc[id];
        return acc;
    }, {})
    
    return recordList.filter(([event]) => event !== "Change").map(([event, id]) => {
        const eventLog = event === "Enter" ? "들어왔습니다" : "나갔습니다";
        return `${userConfig[id]}님이 ${eventLog}.`;
    });
}