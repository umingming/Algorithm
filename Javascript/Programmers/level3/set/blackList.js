/*
    불량 사용자 경우의 수
    - 중복해서 들어갈 순 없다.
    - set으로 넣고 갯수가 banned_id 랑 같을 때만 1로 할까
    
    1. checkBannedId(user, ban) 함수 정의
        > 길이 다르면 반환
        > 문자열 쪼개서 key 비교
    2. banList 정의; ban map하여 chekcList로 아이디 필터해서 담기.
    3. 아이디 적은 순으로 정렬 후 1개인 유저가 다른 곳에도 추측되면 제외
*/
function solution(user_id, banned_id) {
    
    function checkBlack(user, ban) {
        if (user.length !== ban.length) return false;
        
        for (let i = 0; i < user.length; i++) {
            if (ban[i] !== "*" && ban[i] !== user[i]) return false;
        }
        return true;
    }
    
    const blackMap = banned_id.reduce((acc, cur) => {
        acc.push([cur, user_id.filter(user => checkBlack(user, cur))]);
        return acc;
    }, [])
    
    const blackSet = new Set();
    
    function validateBlackList(index, idSet) {
        if (index >= banned_id.length) {
            const ids = [...idSet].sort((a, b) => a > b ? -1 : 0).join();
            blackSet.add(ids);
            return;
        }
        
        const blackList = blackMap[index][1].filter(id => !idSet.has(id));
        
        for (const black of blackList) {
            const newSet = new Set([...idSet, black]);
            validateBlackList(index + 1, newSet)
        }
    }
    
    validateBlackList(0, new Set())
    return blackSet.size;
}