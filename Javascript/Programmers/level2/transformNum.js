/*
    숫자 변환하기
    - x + n, x * 2, x * 3
    - -1 
    
    1. if y 가 6 * x로 나누어 떨어지는지?
    2. if y 가 3 * x로 나누어 떨어지는지?
    3. if y 가 2 * x로 나누어 떨어지는지?
    4. if y 가 6 * x로 나눈 나머지가 n으로 만들 수 있는지?
    5. if y 가 6 * x로 나눈 나머지가 n으로 만들 수 있는지?
    6. if y 가 6 * x로 나눈 나머지가 n으로 만들 수 있는지?
    7. 안 되면 -1
*/

function solution(x, y, n) {
    const answers = [];
    const diff = y - x;
          
    const remBySix = y % (6 * x);
    const quotBySix = y / (6 * x);
    
    const remByThree = y % (3 * x);
    const quotByThree = y / (3 * x);
    
    const remByTwo = y % (2 * x);
    const quotByTwo = y / (2 * x);
    
    if (!remBySix) {
        answers.push(quotBySix * 2);
    } 
    if (!remByThree) {
        answers.push(quotByThree);
    } 
    if (!remByTwo) {
        answers.push(quotByTwo);
    } 
    if (!(remBySix % (3 * x))) {
        answers.push(quotBySix * 2 + remBySix / (3 * x));
    } 
    if (!(remBySix % (2 * x))) {
        answers.push(quotBySix * 2 + remBySix / (2 * x));
    } 
    if (!(remByThree % (2 * x))) {
        answers.push(quotByThree + remByThree / (2 * x));
    } 
    if (!(remByTwo % (3 * x))) {
        answers.push(quotByTwo + remByTwo / (3 * x));
    } 
    if (!(remBySix % n)) {
        answers.push(quotBySix * 2 + remBySix / n);
    } 
    if (!(remByThree % n)) {
        answers.push(quotByThree + remByThree / n);
    } 
    if (!(remByTwo % n)) {
        answers.push(quotByTwo + remByTwo / n);
    } 
    if (!(diff % n)) {
        answers.push(diff / n);
    }
    
    return answers.length ? Math.min(...answers) : -1;
}