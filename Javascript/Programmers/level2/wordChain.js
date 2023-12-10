/*
    끝말잇기
    - 탈락자와 순서를 배열로 반환, 없을 경우 [0, 0]
    
    1. 인덱스를 조건으로 탈락 번호와 차례 구하는 함수 정의
    2. 말한 단어를 저장할 배열 선언
    3. words 길이만큼 반복
    4. if i번째 요소의 끝글자와 i+1의 첫글자가 같은지? i+1 탈락
    5. if i가 이전에 말한 단어인지? i 탈락
*/
function solution(n, words) {
    /*
        인덱스로 탈락 결과 구하기
        1. index를 n으로 나눈 나머지가 번호
        2. 몫이 순서로 결과반환
    */
    function getEliminee(index) {
        const num = (index) % n + 1;
        const order = Math.ceil((index + 1) / n);
        return [num, order];
    }
    
    const priorWords = [];
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        if (priorWords.includes(word)) {
            return getEliminee(i);
        }
        if (words[i + 1] && word[word.length - 1] !== words[i + 1][0]) {
            return getEliminee(i + 1);
        }
        priorWords.push(word);
    }
    return [0, 0];
}