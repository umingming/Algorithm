/*
    다리를 지나는 트럭
    - 길이만큼 시간이 걸림.
    
    1. time, bridge 배열 변수 정의
    2. while truck_weights 존재할 때까지 반복
    3. pop하여 truck변수 정의
    4. bridge 재정의
    5. time 정의
*/
function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridgeTrucks = [];
    
    while (truck_weights.length) {
        const truck = truck_weights.splice(0, 1)[0];
        const bridgeWeight = bridgeTrucks.reduce((acc, [weight]) => acc + weight, truck);
        if (bridgeTrucks.length < bridge_length && bridgeWeight <= weight) {
            //Length O, Weight O; push
            time++;
            bridgeTrucks.push([truck, 0]);
            bridgeTrucks.forEach(truck => truck[1]++);
        } else if (bridgeTrucks.length === bridge_length && bridgeWeight - bridgeTrucks[0][0] <= weight) {
            //Length X, Weight O; 앞에꺼 제거 후, push. time ++
            time++;
            bridgeTrucks = bridgeTrucks.slice(1);
            bridgeTrucks.push([truck, 0]);
            bridgeTrucks.forEach(truck => truck[1]++);
        } else if (bridgeTrucks.at(-1)[0] + truck > weight) {
            //Weight X, 가능성 X; 앞 차랑 내 무게가 weight 넘는 경우, time += length
            time += bridge_length;
            bridgeTrucks = [[truck, 1]];
        } else {
            //Weight X, 가능성 O; 가능한 만큼 제거 후 재정의, time += (length / n) * m
            //현재 트럭 무게 만큼을 비우면 됨.
            let targetWeight = bridgeWeight - weight;
            let passTruck = 0;
            let passLength = 0;
            for (const [weight, length] of bridgeTrucks) {
                targetWeight -= weight;
                passTruck++;
                passLength = length;
                if (targetWeight <= 0) break;
            }
            const delayTime = bridge_length - passLength + 1;
            time += delayTime;
            bridgeTrucks = bridgeTrucks.slice(passTruck);
            bridgeTrucks.forEach(truck => truck[1] += delayTime);
            bridgeTrucks.push([truck, 1]);
        }
        
        bridgeTrucks = bridgeTrucks.filter(([_, length]) => length < bridge_length);
    }
    
    return time + bridge_length;
}