/*
    네트워크
    - 본인 인덱스는 1
    
    1. networks 배열 정의
    2. n을 반복함.
        > computers의 i번째 요소인 computer 정의
        > network 정의 후 computers를 반복하며 1인 경우에만 push
        > i를 요소로 하는 networks에 network넣거나 아예 새로 push
    3. networks의 길이 반환
*/

function solution(n, computers) {
    let networks = [];
    
    for (i = 0; i < n; i++) {
        const computer = computers[i];
        const newNetwork = [];
        computer.forEach((flag, index) => {
            if (flag) {
                newNetwork.push(index);
            }
        })
        
        const orgNetworks = networks.filter(network => network.some(num => newNetwork.includes(num)));
        
        if (orgNetworks.length > 1) {
            networks = networks.filter(network => !orgNetworks.includes(network));
            networks.push([...orgNetworks.flat(), ...newNetwork]);
        } else if (orgNetworks.length === 1) {
            orgNetworks[0].push(...newNetwork);
        } else {
            networks.push(newNetwork);
        }
    }
    return networks.length;
}