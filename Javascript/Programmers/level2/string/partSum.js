/*
    발상의 전환
    count는 배열의 크기보다 커질 수 없으므로 배열을 하나 더 이어붙이면 복잡하게 생각할 필요가 없어짐.
*/
function solution(elements) {
    const sumSet = new Set();
    const {length} = elements; 
    
    elements = [...elements, ...elements];
    
    for (let count = 1; count <= length; count++) {
        for (let index = 0; index < length; index++) {
            const sum = elements.slice(index, index + count)
                                .reduce((acc, cur) => acc + cur, 0);
            sumSet.add(sum);
        }
    }
    
    return sumSet.size;
}