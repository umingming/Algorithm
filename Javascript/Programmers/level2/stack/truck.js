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
        const truck = truck_weights.pop();
        const bridgeWeight = bridgeTrucks.reduce((acc, [weight]) => acc + weight, truck);
        if (bridgeTrucks.length < bridge_length && bridgeWeight <= weight) {
            //Length O, Weight O; push
            time++;
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
            for (let i = 0; i < bridgeTrucks.length; i++) {
                const [preWeight, preLength] = bridgeTrucks[i];
                targetWeight -= preWeight;
                
                if (targetWeight <= 0) {
                    const delayTime = bridge_length - preLength + 1;
                    time += delayTime;
                    bridgeTrucks = bridgeTrucks.slice(i + 1);
                    bridgeTrucks.forEach(truck => truck[1] += delayTime);
                    break;
                }
            }
            bridgeTrucks.push([truck, 1]);
        }
        
        bridgeTrucks = bridgeTrucks.filter(([_, length]) => length < bridge_length);
    }
    
    return time + bridge_length;
}