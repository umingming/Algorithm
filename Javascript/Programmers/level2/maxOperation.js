/*
    절댓값 수식 최대화
    
    1. 연산자와 피연산자 배열 선언
        > 피연산자는 +, -, * 기준으로 expression 쪼개기
        > 연산자는 match로 구하기
    2. 6가지 우선순위 결과 구하기
        > 연산자별로 함수 정의
    3. 최댓값 반환
*/
function solution(expression) {
    const operatorSet = [...new Set(expression.match(/[+]|[-]|[*]/g))];
    const results = [];
    /*  
        연산 수행
        1. 인자 배열에서 index, index + 1의 요소를 제거하고 인자 연산 결과 추가
    */
    function execute(operands, operators, operator) {
        const operate = (a, b) => {
            if (operator === "+") return a + b;
            else if (operator === "-") return a - b;
            else if (operator === "*") return a * b;
            else return null;
        }
        
        while (operators.includes(operator)) {
            const index = operators.findIndex(i => i === operator);
            const result = operate(+operands[index], +operands[index + 1]);
            operands.splice(index, 2, result);
            operators.splice(index, 1);
        }
    }
    
    if (operatorSet.length === 1) {
        const operands = expression.split(/[+]|[-]|[*]/);
        const operators = expression.match(/[+]|[-]|[*]/g);
        execute(operands, operators, operatorSet[0]);
        return Math.abs(operands[0]);
    }
    
    for (const first of operatorSet) {
        const filterOperator = operators => operatorSet.filter(operator => !operators.includes(operator));
        
        for (const second of filterOperator([first])) {
            const operands = expression.split(/[+]|[-]|[*]/);
            const operators = expression.match(/[+]|[-]|[*]/g);
            
            execute(operands, operators, first);            
            execute(operands, operators, second);
            execute(operands, operators, filterOperator([first, second])[0]);
            
            results.push(operands[0]);
        }
    }
    return Math.max(...results.map(result => Math.abs(result)))
}