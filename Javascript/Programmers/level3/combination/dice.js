/*
    주사위 고르기
    
    1. 주사위들을 각각 내림차순 정렬하고 각각 마지막 요소에 인덱스를 추가함.
    2. 주사위들의 첫번째 인덱스부터 차례대로 비교해서 정렬함.
    3. 주사위의 갯수 중 반에 해당하는 것들만 잘라서 6번쩨 요소를 취함.
    4. 해당 요소를 오름차순으로 정렬하여 반환
*/
function solution(dices) {
    dices.forEach((dice, index) => {
        const total = dice.reduce((acc, cur) => acc + cur, 0);
        dice.sort((a, b) => b - a);
        dice.push(total);
        dice.push(index + 1);
    })
    
    dices.sort((a, b) => b[6] - a[6] || b[0] - a[0] || b[1] - a[1] || b[2] - a[2] || b[3] - a[3] || b[4] - a[4] || b[5] - a[5]);
    
    const mine = dices.slice(0, dices.length / 2).map(dice => dice[7]);
    
    return mine.sort((a, b) => a - b);
}