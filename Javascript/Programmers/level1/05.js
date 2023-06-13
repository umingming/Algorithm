/*
    페인트칠 횟수 구하기
    - selection: 다시 칠해야 하는 구역의 번호로 오름차순 정렬
    - 1 <= m <= n <= 100000

    1. count 변수 정의
    2. sections의 0번째 요소를 section 할당함.
    3. sections 반복
        1. start + m 보다 크거나 같은 값을 index 할당
        2. section, sections 재정희
        3. count++
    4. count 반환
*/
function solution(n, m, sections) {
    let count = 0;
    let section = sections[0];

    while (sections.length) {
        const index = sections.findIndex(i => i >= section + m);
        section = sections[index];
        sections = index >= 0 ? sections.slice(index) : [];

        count++;
    }
    return count;
}