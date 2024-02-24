/*
    부분 수열 찾기
    - 길이가 짧고, 인덱스가 작은 수열이 우선
    - 부분 수열의 요소들이 다 같을 경우만 예외
    
    1. part 배열 정의
    2. while sequence 반복
        1) sequnece.pop 값을 part 배열에 할당
        2) part의 합이 k보다 커지면?
            2-1) 0이 아닌 요소의 인덱스를 구해서 0으로 만들기
        3) part의 합이 k면 중단하고 result 넣기
    3. if part의 첫 번째와 두번째 합이 같은지?
        1) part 0 번째 요소 index 찾고 결과 리턴
*/
function solution(sequence, k) {
    const copy = [...sequence];
    let part = [];
    let partSum = 0;
    let size = 0;
    
    while (partSum !== k) {
        const num = copy.pop();
        part.push(num);
        partSum += num;
        size++;
        
        if (partSum > k) {
            partSum -= part[part.length - size];
            size--;
        }
    }
    
    part = part.slice(part.length - size);
    const { length: start } = copy;
    
    if (part[0] === part[size - 1]) {
        const index = sequence.findIndex(num => num === part[0]);
        return [index, index + size - 1];
    }
    
    return [start, start + size - 1];
}