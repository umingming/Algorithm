/*
    탐욕법; minimum spanning tree, MST
    
    1. costs를 오름차순 정렬한다.
    2. lands Set과 cost 변수를 정의하여, costs의 첫 번째 요소에 해당하는 값들을 각각에 추가한다.
    3. while lands의 길이가 n이 될 때까지 반복
        > costs 중에서, 0번째와 1번째 요소가 하나는 lands에 속하고 하나는 속하지 않는 경우의 인덱스를 구한다.
        > 해당 값에서 lands에 추가하고, costs를 더한다
    4. cost 값 반환
*/
function solution(n, costs) {
    costs.sort((a, b) => a[2] - b[2]);
    const landSet = new Set(costs[0].slice(0, -1));
    let total = costs[0][2];
    
    while (landSet.size < n) {
        const [start, end, cost] = costs.find(([start, end]) => [start, end].filter(land => landSet.has(land)).length === 1);
        landSet.add(start);
        landSet.add(end);
        total += cost;
    }
    
    return total;
}