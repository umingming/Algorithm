/*
    부분 수열 찾기
    - 길이가 짧고, 인덱스가 작은 수열이 우선
    
    1. sequence를 k의 부분 수열 정의함.
        1) 이전 요소의 합이 k인 경우: 다음 요소에 cur push
        2) 이전 요소들과 cur의 합이 k인 경우: 요소에 push
        3) 이전 요소들의 합과 cur의 합이 k를 초과하는 경우
            3-1) 처음 index를 제외하고 k가 되는 경우: 0번째 요소 제외하고 push
            3-2) 안 되면 요소 pop()
        4) 현재 요소가 k인 경우
            4-1) 이전 요소의 합이 k인 경우: 새로운 요소에 push
            4-2) 아닌 경우, pop 후 push
    2. 마지막 요소의 길이와 같은 부분 수열 요소가 있는지 확인
    3. 2의 결과로 findIndex 해서 결과 반환
    
*/
function solution(sequence, k) {
    const parts = sequence.reduce((acc, cur) => {
        const partSum = acc?.at(-1)?.reduce((acc, cur) => acc + cur, 0) ?? 0;
        if (partSum === k) {
            acc.push([cur]);
        } else if (partSum + cur === k) {
            if (partSum === 0) {
                acc.push([cur]);
            } else {
                acc.at(-1).push(cur);
            }
        } else if (partSum + cur > k) {
            let flag = true;
            const part = acc.at(-1);
            while(part.length) {
                part.splice(0, 1);
                if (part.reduce((acc, cur) => acc + cur, 0) + cur === k) {
                    part.push(cur);
                    flag = false;
                    break;
                }
            }
            if (flag) {
                acc.pop();
                acc.push([cur]);
            }
        } else if (cur === k) {
            if (partSum === k) {
                acc.push([cur]);
            } else {
                acc.pop();
                acc.push([cur]);
            }
        } else {
            if (partSum === 0) {
                acc.push([cur]);
            } else {
                acc.at(-1).push(cur);
            }
        }
        return acc;
    }, [])
    
    const partSum = parts?.at(-1)?.reduce((acc, cur) => acc + cur, 0) ?? 0;
    if (partSum !== k) parts.pop();
    
    const min = parts.find(i => i.length === parts.at(-1).length);
    const result = [
        sequence.findIndex(i => i === min[0]),
        sequence.findIndex(i => i === min.at(-1))
    ]
    if (min[0] === min.at(-1)) {
        return [result[0], result[0] + min.length - 1]
    }
    return result;
}