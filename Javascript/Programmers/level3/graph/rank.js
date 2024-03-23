/*
    순위
    - 정확히 순위를 매기려면 단계에 하나의 값만 있을 경우
    
    1. result 함수 정의
    2. for 1부터 n까지
        > i가 0번째 인덱스에 있는 것들 중 밑에 있는 건 lose, 위에 있는건 win으로 넣어서
        > n-1번째 요소에 위의 값 정의
    3. result를 map에서 재정의
    4. 모든 요소를 가지고 있는 것들의 갯수 반환
*/
function solution(n, results) {
    const result = [];
    
    for (i = 1; i <= n; i++) {
        const win = results.filter(([_, target]) => target === i).map(([target, _]) => target);
        const lose = results.filter(([target, _]) => target === i).map(([_, target]) => target);
        
        result.push([win, lose]);
    }
   
    let count = 0;
    for (const [win, lose] of result) {
        //내 밑의 값보다 더 밑의 값
        function getLose(target) {
            const lose = [];
            const [_, loselose] = result[target - 1];
            if (loselose.length) {
                lose.push(loselose.map(getLose));
            }
            
            return [target, loselose, lose].flat(Infinity);
        }
        
        //내 위의 값보다 더 위의 값
        function getWin(target) {
            const win = [];
            const [winwin, _] = result[target - 1];
            if (winwin.length) {
                win.push(winwin.map(getWin));
            }
            return [target, winwin, win].flat(Infinity);
        } 
        
        const loselose = new Set(lose.flatMap(getLose));
        const winwin = new Set(win.flatMap(getWin));
        
        if (loselose.size + winwin.size === n - 1) {
            count++;
        }
    }
    
    return count;
}