/*
    뒷 큰 수 찾기
    - 이전 요소가 나보다 작은데 larger이 나보다 클 경우 그 값 추가
    
    1. numbers reduce하여 largers 반환
*/
function solution(numbers) {
    const largers = [];
    const behinds = [];
    
    while (numbers.length) {
        const num = numbers.pop();
        const preNum = behinds.at(-1);
        const { length } = numbers;
        const preLarger = largers[length + 1];
        let larger = -1;
        
        if (num >= preNum && (num < preLarger || preLarger === -1)) {
            larger = preLarger;
        } else if (num < preNum) {
            larger = preNum;
        } else {
            for (let i = behinds.length - 1; i > -1; i--) {
                const behind = behinds[i];
                if (num < behind) {
                    larger = behind;
                    break;
                } else if (num === behind) {
                    larger = largers[length + behinds.length - i];
                    break;
                }
            }
        }
        
        largers[length] = larger;
        behinds.push(num);
    }
    
    return largers;
}