/*
    명예의 전당 최하위 점수 구하기
    
    1. 전당 배열과, 최하위 점수 배열 선언
    2. for scores 반복
        1) if bestScores가 k 보다 작은지?
            - score best에 push 
            - 이전 worst와 score 중 더 작은 값 worst push
        2) if 이전 worst 보다 score이 큰지?
            - best에 score push 후 내림차순 정렬
            - best의 가장 마지막 요소롤 worst에 추가
    3. 내림차순 정렬하는 sort함수 정의
*/
function solution(k, scores) {
    const bestScores = []
    const worstScores = [];
    
    for (const score of scores) {
        if (bestScores.length < k) {
            bestScores.push(score);
            
            worstScores.push(Math.min(worstScores.at(-1) ?? score, score));
        } else if (score > worstScores.at(-1)) {
            bestScores.push(score);
            bestScores.sort((a, b) => a > b ? -1 : 1);
            bestScores.pop();
            
            worstScores.push(bestScores.at(-1));
        } else {
            worstScores.push(worstScores.at(-1));
        }
    }
    
    return worstScores;
}