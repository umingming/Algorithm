/*
    숫자 카드 나누기
    - 최대 공약수 구하기
    
    1. 배열의 약수 구하는 함수 정의
        > 가장 작은 함수의 약수를 구하고, 
            > 제곱근을 구하고, for 반복
        > 그 약수가 나머지 값들의 약수인 경우만 반환
    2. 1에서 구한 약수 함수로 상대 배열이 나누어지지 않는 경우만 정의
    3. 해당 값 중 제일 큰 값 반환
*/
function solution(arrayA, arrayB) {
    function checkDivisior(number, target) {
        return number % target === 0;
    }
    
    function validateDivisiorsBy(divisiors, others, isChecked = true) {
        return divisiors.filter(divisior => others.every(num => checkDivisior(num, divisior) === isChecked));
    }
    
    function getCommonDivisiors(array) {
        array.sort((a, b) => a - b);
        
        const min = array[0];
        const target = Math.sqrt(min);
        const divisiors = [];
        
        for (let i = 1; i <= target; i++) {
            if (checkDivisior(min, i)) {
                divisiors.push(i);
                divisiors.push(min / i);
            }
        }
        return validateDivisiorsBy(divisiors, array.filter(num => num !== min));
    }
    
    const divisiorsByOnlyA = validateDivisiorsBy(getCommonDivisiors(arrayA), arrayB, false);
    const divisiorsByOnlyB = validateDivisiorsBy(getCommonDivisiors(arrayB), arrayA, false);
    
    return Math.max(...divisiorsByOnlyA, ...divisiorsByOnlyB, 0);
}