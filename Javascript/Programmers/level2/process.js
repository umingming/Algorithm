/*
    프로세스
    
    1. priorities를 index를 포함하는 배열로 변환
    2. 첫 번째 요소, 두 번째 요소 기준으로 정렬
    3. loaction을 두번째 요소로 갖는 값의 findIndex
*/
function solution(priorities, location) {
    const target = priorities[location];
    const queue = priorities
                    .map((i, index) => [i, index])
                    .sort((a, b) => a[0] - b[0]);
    const preIndex = queue.find(i => i[0] > target)?.[1] ?? -1;
    
    queue.sort((a, b) => {
        if (a[0] !== target || b[0] !== target) return a[0] - b[0];
        if (a[1] > preIndex && b[1] > preIndex) return b[1] - a[1];
        else if (a[1] < preIndex && b[1] < preIndex) return b[1] - a[1];
        else return 0;
    })
    return queue.length - queue.findIndex(i => i[1] === location)
}