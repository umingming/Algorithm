/*
    점프와 순간 이동
    - 2500, 1250, 625->624, 312, 156, 78, 39->38, 19->18, 9->8, 4, 2, 1->0
    - n을 2로 나누어 떨어지는지 확인
    
    1. count 변수 선언
    2. while n이 0보다 큼을 조건으로 반복
    3. if n이 홀수인지?
        > count++ n에 n-1/2 할당
        > 아닌경우 n/2
*/
function solution(n) {
    let count = 0;
    while (n) {
        if (n % 2) {
            count++;
            n = (n - 1) / 2;
        } else {
            n /= 2;
        }
    }
    return count;
}
