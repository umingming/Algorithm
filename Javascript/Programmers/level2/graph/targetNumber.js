/*
    1. 총합 구하는 함수 정의
    2. 합의 갯수 중 target인 것 반환
*/
function solution(numbers, target) {
    
    function sum(index, parent) {
        if (index === numbers.length) return parent;
        
        const num = numbers[index];
        const totals = [...parent.map(total => total + num), ...parent.map(total => total - num)]
        return sum(++index, totals);
    }
    
    const result = sum(1, [+numbers[0], -numbers[0]])
    const {length} = result.filter(value => value === target);
    
    return length;
}

function solution(numbers, target) {
    let result = [numbers[0], -numbers[0]]
    for (let i = 1; i < numbers.length; i++) {
        result = [...result.map(total => total + numbers[i]),
                    ...result.map(total => total - numbers[i])]
    }
    const {length} = result.filter(value => value === target);
    
    return length;
}