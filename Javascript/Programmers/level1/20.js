/*
    삼총사 만들 수 있는 방법의 수 구하기
    - pop 사용해서, 순차적으로 삼총사 만들고 요소 배제하기
    
    1. while 조건은 번호가 3개 이상
        1) standard 변수에 pop 할당
        2) number reduce로 값 확인
    
*/
function solution(numbers) {
    let answer = 0;
    
    while (numbers.length >= 3) {
        const a = numbers.pop();
        const stores = [];
        let count = 0;
        
        while (numbers.length >= 2) {
            const b = numbers.pop();
            count += numbers.filter(i => a + b + i === 0).length;
            stores.push(b);
        }
        stores.forEach(i => numbers.push(i));
        answer += count;
    }
    return answer;
}