/*
    네트워크
    - 본인 인덱스는 1
    
    1. computers에서 index제외하고 잇는 값이 1미만인 거 구해서 반환
*/

function solution(n, computers) {
    return computers.filter((computer, index) => {
        const before = computer.slice(0, index);
        const after = computer.slice(index + 1);
        return [...before, ...after].every(i => i === 0);
    }).length + 1;
}