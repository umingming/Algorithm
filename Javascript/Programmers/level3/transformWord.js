/*
    단어 변환
    - 한 번의 한 개의 알파벳만
    
    1. 변환 가능한 단어들 반환하는 함수 정의
    2. 재귀적으로 1의 함수를 호출하고 부모와 갯수를 누적
    3. 부모 집단은 변환 가능 단어에서 제외하고, 타겟에 접근하면 거기서 return
*/
function solution(begin, target, words) {
    /*
        변환 가능한 단어 반환
        1. 단어별 인자 단어와 공통 글자 갯수를 객체로 정의
        2. 한 글자만 다른 단어 배열 반환
    */
    function getConvertibles(word) {
        const similarConfig = words.reduce((acc, cur) => {
            const { length } = word.split("").filter((i, index) => i === cur[index]);
            acc[cur] = length;
            return acc;
        }, {})
        
        return Object.entries(similarConfig)
                .filter(([_, value]) => value === word.length - 1)
                .map(([key]) => key);
    } 
    /*
        변환 가능성을 확인하고 결과 반환
        
        1. 부모와 중복되지 않는 변환 가능 글자들을 변수로 정의
        2. target이 있으면 결과 리턴하고 중단
        3. 모든 변환 가능 글자들을 재귀 호출하며 확인
    */
    function validateConvertibles(parents) {
        const convertibles = getConvertibles(parents.at(-1))
                                .filter(convertible => !parents.includes(convertible));
        
        //변환 가능성이 없으면 0
        if (convertibles.length === 0) return 0 
        //parents는 타겟까지의 변환 과정을 의미하므로 해당 갯수 반환
        if (convertibles.includes(target)) return parents.length;
        
        let result = 0;
        for (const convertible of convertibles) {
            const resultByConvertible = validateConvertibles([...parents, convertible]);
            
            //결과가 0인 경우 최소값 할당 시 혼선생길 수 있으므로 배제
            if (!resultByConvertible) continue;
            result = !result ? resultByConvertible : Math.min(result, resultByConvertible);
        }
        return result;
    }
    
    return validateConvertibles([begin]);
}