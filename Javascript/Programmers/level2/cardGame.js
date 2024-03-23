/*
    혼자 놀기의 달인; 반복문
    
    1. grouping하여 갯수를 반환하는 함수 정의
        > seq를 인자로 받음.
        > seq 보다 큰 숫자가 있는지? 
            > 없으면 0을 반환함.
        > 있으면 해당 인덱스를 target으로 선언
        > while cards[target]이 seq보다 클 때까지
            > 새로운 타겟을 구하고 cards[target]에 seq 넣기
        > 해당 seq의 갯수 반환
    2. while 모든 값이 seq보다 작아질 때 까지
        > 1의 함수로 seq 넣고 값 구해서 group 배열에 push
        > seq++;
    3. group 갯수 내림차순 후 0번째와 1번째 요소 곱한 값을 반환
*/

function solution(cards) {
    function getSizeByGroup(sequence) {
        let target = cards.findIndex(card => card > sequence);
        if (target === -1) {
            return 0;
        }
        
        while (cards[target] > sequence) {
            const newTarget = cards[target] - 1;
            cards[target] = sequence;
            target = newTarget;
        }
        
        const { length } = cards.filter(card => card === sequence);
        return length;
    }
    
    const groups = [];
    let sequence = 0;
    
    while (cards.some(card => card > sequence)) {
        const group = getSizeByGroup(sequence);
        groups.push(group);
        sequence++;
    }
    
    groups.sort((a, b) => b - a);
    
    return (groups[0] * groups[1]) || 0;
}