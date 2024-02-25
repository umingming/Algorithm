/*
    두 큐 합 같게 만들기
    
    1. queue1, queue2의 합을 각각 구해서 목표 점수 변수를 선언한다.
    2. result 변수 선언한다.
    3. result가 queue의 길이의 2배 이하를 조건으로 반복한다
*/
function solution(queue1, queue2) {
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    const target = (sum1 + sum2) / 2;
    const max = queue1.length * 3;
    
    if (Math.ceil(target) !== target) {
        return -1;
    }
    
    let result = 0;
    
    while (sum1 !== target) {
        if (sum1 > sum2) {
            const index = queue1.findIndex(num => num);
            if (index === -1) {
                return -1;
            }
            
            const num = queue1[index];
            sum1 -= num;
            sum2 += num;
            queue2.push(num);
            queue1[index] = 0;
        } else if (sum1 < sum2) {
            const index = queue2.findIndex(num => num);
            if (index === -1) {
                return -1;
            }
            
            const num = queue2[index];
            sum2 -= num;
            sum1 += num;
            queue1.push(num);
            queue2[index] = 0;
        }
        result++;
        
        if (result > max) {
            return -1;
        }
    }
    
    return result;
}