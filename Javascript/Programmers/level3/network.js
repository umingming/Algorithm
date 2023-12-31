/*
    네트워크
    - 본인 인덱스는 1
    
    1. computers에서 index제외하고 잇는 값이 1미만인 거 구해서 반환
*/

function solution(n, computers) {
    const { length } = computers.filter((computer) => {
        const { length } = computer.filter(num => num === 1);
        return length === 1;
    });
    
    return length === n ? length : length + 1;
}