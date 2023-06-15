/*
    부분문자열 비교하여 작거나 같은 횟수 구하기
    
    1. p의 길이를 변수로 선언
    2. t를 map으로 변환함.
        1. 해당 문자열부터 length 길이만큼 자름.
    3. p보다 작거나 같음을 조건으로 필터링
    4. 길이 리턴함.
*/
function solution(t, p) {
    t = t.split("");
    const length = p.length;
    const parts = t.map((_, i) => t.slice(i, i + length).join(""))
                    .filter(part => part.length === length);
    const answer = parts.filter(part => (part <= p));
    return answer.length;
}