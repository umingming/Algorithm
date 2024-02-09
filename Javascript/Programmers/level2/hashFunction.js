/*
    테이블 해시 함수
    
    1. col번째 기준으로 오름차순
        > 같을 경우 첫 번째 요소 기준으로 내림차순
    2. row의 값 구하는 함수 정의
    3. begin 부터 end까지 누적
*/
function solution(data, col, row_begin, row_end) {
    data.sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]);
    
    function getResult(row, index) {
        index += row_begin;
        return row.reduce((acc, cur) => acc + (cur % index), 0);
    }
    
    // ^ 는 비트연산자(XOR)
    return data.slice(row_begin - 1, row_end)
                .reduce((acc, cur, index) => acc ^ getResult(cur, index), 0);
}