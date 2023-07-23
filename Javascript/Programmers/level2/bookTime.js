/*
    필요한 최소 방의 갯수
    - 청소하는 데 걸리는 시간은 10분
    
    1. 시간을 분으로 변환하며 퇴실 시간은 청소 10분 시간을 포함함.
    2. 시작 시간이 빠른 순으로 sorting함.
    3. bookTime을 reduce로 rooms를 구함
        1) cur의 시작 시간이 acc의 퇴실 시간보다 같거나 느린 경우가 있는지?
            - 해당 rooms를 cur로 치환함.
        2) acc에 cur push
    4. rooms의 length 반환
*/
function solution(book_time) {
    function transformMin(time) {
        const [hour, min] = time.split(":").map(i => +i);
        return hour * 60 + min;
    }
    const books = book_time
                    .map(i => [transformMin(i[0]), transformMin(i[1]) + 10])
                    .sort((a, b) => a[0] < b[0] ? -1 : 1);
    const rooms = books.reduce((acc, cur) => {
        const index = acc
                    .sort((a, b) => a[1] < b[1] ? -1 : 1)
                    .findIndex(i => cur[0] >= i[1]);
        if (index > -1) {
            acc[index] = cur;
        } else {
            acc.push(cur);
        }
        return acc;
    }, [])
    return rooms.length;
}