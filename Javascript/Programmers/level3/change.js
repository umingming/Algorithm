/*
    거스름돈
    - 1,000,000,007 나누기
    - 가장 큰 수와 그 수를 만들기 위한 조합을 찾으면 될 듯?
    - 그리고 가장 큰 수로 돈을 나누었을 때 남은 돈의 대한 조합
    - 근데 2개 일 떄랑 1개일 때 경우의 수가 다를 수 있을 거 같다.
    - 3, 4, 5; 20, 15/5, 10/10, 5/15
    - n을 약수로 나누면,,, 2 + 2 + 1
    
    1. money을 오름차순 정렬 후 max를 pop한다.
    2. x를 max로 나눠 quotient와 rest를 구한다.
    =====================================
    1. money를 내림차순 정렬한다.
    2. result 변수 정의
    3. 특정 값에 대한 조합 경우의 수 변수 구하기(타겟보다 작은 값들)
    4. for문 돌면서 누적
*/
function solution(n, money) {
    money.sort((a, b) => b - a);
    
    /*
        재귀적으로 호출
    */
    function getCount(target, max) {
        let count = 0;
        
        for (const unit of money) {
            if (unit >= max || unit > target) continue;
            
            const quotient = Math.floor(target / unit);
            let newTarget = target % unit;
            
            count += newTarget ? getCount(newTarget, unit) : 1;
            
            for (let i = quotient - 1; i > 0; i--) {
                newTarget += unit;
                const newCount = getCount(newTarget, unit);
                
                count += newCount;
            }
        }
        
        return count;
    }
    
    return getCount(n, Infinity) % 1000000007;
}