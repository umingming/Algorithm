/*
    다음 큰 숫자
    
    1. n의 2진수 구하기
    2. "01" 기준으로 인덱스를 찾아 변수에 할당
    3. 2에서 구한 인덱스가 -1인 경우
        > 1번째 인덱스에 0을 추가하고, index 2부터 변환 후 반환
    4. 01을 10으로 치환하고, index + 2 부터 변환
*/
function solution(n) {
    const binary = n.toString(2);
    const index = binary.lastIndexOf("01");
    
    function minimizeFollowing(index) {
        const following = binary.substring(index);
        const { length } = following;
        const { length: countForOne } = following.match(/1/g) ?? [];
        
        return "0".repeat(length - countForOne) + "1".repeat(countForOne);
    }
    
    if (index === -1) {
        return parseInt("10" + minimizeFollowing(1), 2);
    } else {
        const prior = binary.substring(0, index) + "10";
        const following = minimizeFollowing(index + 2);
        return parseInt(prior + following, 2);
    }
}