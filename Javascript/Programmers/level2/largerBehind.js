/*
    뒷 큰 수 찾기
    - 이전 요소가 나보다 작은데 larger이 나보다 클 경우 그 값 추가
    
    1. numbers reduce하여 largers 반환
*/
function solution(numbers) {
    const largers = numbers.reduce((acc, cur, index) => {
        let larger = -1;
        if (numbers[index - 1] < cur && acc.at(-1) > cur) {
            larger = acc.at(-1);
        } else {
            const larger = numbers.find((num, i) => i > index && num > cur) ?? -1
            acc.push(larger);
        }
        return acc;
    }, []);
    return largers;
}