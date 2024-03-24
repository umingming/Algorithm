/*
    stack
    
    1. order의 길이를 length로 하는 배열 정의하며 그 요소의 값은 index로 함. boxes
    2. order의 첫 번째 요소를 index로 boxes를 두 개로 자름.
    3. count 변수 선언
    4. for order 반복
        > prefix의 마지막인지? 
            > prifix.pop(); count++;
        > suffix의 처음인지? 
            > suffix splice count++;
        > 다 해당 안 되면? count 반환
*/
function solution(orders) {
    const boxes = Array.from({length: orders.length}, (_, index) => index + 1);
    const prefix = boxes.slice(0, orders[0]);
    const suffix = boxes.slice(orders[0]).reverse();
    let count = 0;
    let index = 0;
    
    while (prefix.length || suffix.length) {
        const order = orders[index];
        
        if (prefix.at(-1) === order) {
            prefix.pop();
            count++;
            index++;
        } else if (suffix.at(-1) === order) {
            suffix.pop();
            count++;
            index++;
        } else if (suffix.length) {
            const target = suffix.pop();
            prefix.push(target);
        } else {
            return count;
        }
    }
    
    return count;
}