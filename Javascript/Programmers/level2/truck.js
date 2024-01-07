/*
    다리를 지나는 트럭
    - 길이만큼 시간이 걸림.
    
    1. weight, bridge_length 안 넘게 truck을 묶음.
    2. truck 묶음 중 최댓 값 + bridge_length * 묶음 갯수 반환
*/
function solution(bridge_length, weight, truck_weights) {
    const truckGroups = truck_weights.reduce((acc, cur) => {
        const group = acc.at(-1);
        const groupWeight = group.reduce((acc, cur) => acc + cur, 0);
        //group의 갯수가 length 넘는지
        if (group.length < bridge_length && groupWeight + cur <= weight) {
            group.push(cur);
        } else {
            acc.push([cur]);
        }
        return acc;
    }, [[]]);
    const max = Math.max(...truckGroups.map(({length}) => length));
    return (truckGroups.length * bridge_length) + max;
}