/*
    거리두기
    - 2이하로 앉지 말기; 단, 파티션 있으면 허용
    
    1. 거리 두기 준수 여부를 확인하는 함수 정의
        > 인자로 받은 배열을 90도 돌려 세로 대기실 변수 정의
        > 배열의 문자열 중 POP, PP가 있을 경우 0 반환
        > 아니면 1
    2. places를 map하여 반환
*/
function solution(places) {
    function checkDistance(place) {
        if (place.some(row => /PP|POP/g.test(row))) return false;
        
        for (let i = 0; i < 5; i++) {
            const row = place[i];
            if (row.includes("PO")) {
                const index = row.indexOf("PO") + 1;
                if (place[i - 1]?.[index] === "P" 
                    || place[i + 1]?.[index] === "P") return false;
            }
            
            if (row.includes("OP")) {
                const index = row.indexOf("OP");
                if (place[i - 1]?.[index] === "P" 
                    || place[i + 1]?.[index] === "P") return false;
            }
        }
        
        return true;
    } 
    
    function validateDistance(place) {
        const placeForColumn = place.reduce((acc, cur) => {
            cur.split("").forEach((i, index) => acc[index] += i);
            return acc;
        }, ["", "", "", "", ""]);
        
        return +(checkDistance(place) && checkDistance(placeForColumn))
    }
    
    return places.map(validateDistance);
}