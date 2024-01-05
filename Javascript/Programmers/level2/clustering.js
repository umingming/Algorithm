/*
    뉴스 클러스터링
    - 두 글자씩 끊고 영어가 아닌 경우 버림
    
    1. createTwoCharSets 정의; 문자열을 인자로 2글자 배열 만들기
        > reduce 사용 소문자로 만들기
        > 문자인지 검증
    2. 문자열의 교집합 정의
    3. 문자열의 합집합 정의
    4. 계산
*/
function solution(str1, str2) {
    function createTwoCharSets(str) {
        const twoCharSets = str.toLowerCase().split("").reduce((acc, cur, index) => {
            acc[index] += cur;
            acc.push(cur);
            return acc;
        }, [""])
        return twoCharSets.filter(set => /[a-z]{2}/.test(set));
    }
    
    const sets1 = createTwoCharSets(str1).sort((a, b) => -(b > a));
    const sets2 = createTwoCharSets(str2).sort((a, b) => -(a > b));
    const union = [];
    const intersection = [];
    let store = "";
    
    for (const set1 of sets1) {
        let set2 = store;
        union.push(set1);
        
        if (!store) {
            set2 = sets2.pop();
            if (set1 !== set2) {
                union.push(set2)    
            }
        }
        
        //set1이 더 큰 경우
        while (set1 > set2) {
            store = "";
            set2 = sets2.pop();
            
            if (set1 > set2) {
                union.push(set2);
            }
        }
        
        //set2가 더 큰 경우
        if (set2 > set1) {
            store = set2;
            continue;
        }
        
        //같은 경우
        if (set1 == set2) {
            intersection.push(set1);
            store = "";
        }
    }
    
    if (sets2.length) {
        union.push(...sets2);
    }
    
    return Math.floor((intersection.length || 1) / (union.length || 1) * 65536)
}