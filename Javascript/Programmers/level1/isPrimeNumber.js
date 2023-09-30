/*
    소수가 되는 경우의 수
    1. 소수 확인 함수 정의
    2. nums 내림차순 정렬
    3. nums가 3개 이상일 때까지 반복
        1) nums pop해서 꺼냄
        2) nums 반복
            1) filteredNums 정의; 나보다 작으며, 같이 더했을 때 홀수가 되는 것들
            2) isPrimeNum으로 체크하고 값 반환
*/
function solution(nums) {
    let answer = 0;
    const isPrimeNum = (num) => {
        const sqrt = Math.sqrt(num);
        let cnt = +!(num % sqrt);
        for (let i = 1; i <= sqrt; i++) {
            if (!(num % i)) cnt += 2;
        }
        return cnt === 2;
    }
    nums.sort((a, b) => b - a);
    
    while(nums.length >= 3) {
        const min = nums.pop();
        nums.forEach(max => {
            const { length } = nums.filter(num => num < max && isPrimeNum(max + min + num));
            answer += length;
        })
    }
    
    return answer;
}