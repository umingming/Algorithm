/*
    추석 트래픽
    
    1. lines로 요청의 시작과 끝을 구한다.
        > line을 빈문자열 기준으로 나눈 후, 0번째 요소와 1번째 요소로 date를 정의함.
        > date에서 getTime()으로 끝시간을 구함.
        > 마지막 요소에서 s를 빼고, * 1000을 한 후 -1을 한 값을 끝시간에서 빼서 시작 시간 구함. 
    2. 시작이 빠른 순, 끝이 빠른 순으로 정렬한다
    3. 시작에서 -0.001 값부터 1초간 처리할 수 있는 갯수를 reduce로 구한다.
        = 즉 -1부터 1000만큼.
    4. 해당 값의 max 값을 반환한다.
*/
function solution(lines) {
    const requests = lines.map(line => {
        const [day, time, processingSec] = line.split(" ");
        const processingTime = processingSec.substring(0, processingSec.length - 1) * 1000 - 1;
        const end = new Date(`${day} ${time}`).getTime();
        const start = end - processingTime;
        return [start, end];
    });
    requests.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    const processingCapas = requests.reduce((acc, [_, end], index) => {
        const target = end - 1 + 1000;
        const { length } = requests.slice(index + 1)
                            .filter(request => request[0] <= target);
        acc.push(length + 1);
        return acc;
    }, [])
    
    return Math.max(...processingCapas);
}