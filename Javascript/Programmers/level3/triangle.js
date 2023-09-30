/*
    작업 시간 평균의 최소값
    - 이전 작업이 끝나는 시점에, 대기가 하나일 경우 해당 작업 먼저 시작
    - 여럿일 경우, 소요시간이 짧은 순서로 실행
    
    1. 요청 시점 역순으로 정렬
    2. 해당 작업의 소요시간과 끝나는 시간을 고려한 값을 now에 할당
    3. 작업 시간 times 선언
    4. while jobs 있을 때 까지
        1) times에 시작하는 값이 있는지? 없으면 tiems 이전 중 정렬해서 job서 뺌.
        2) 해당 작업의 소요시간과 끝나는 시간을 고려한 값을 now에 할당
        3) times에 now 넣기
*/
function solution(jobs) {
    jobs.sort((a, b) => b[0] - a[0]);
    const [request, process] = jobs.pop();
    let now = request + process;
    const times = [now];
    
    while(jobs.length) {
        const hasPending = !!jobs.filter(job => job[0] <= now).length;
        if (hasPending) {
            jobs.sort((a, b) => a[0] <= now ? b[0] <= now ? b[1] - a[1] : 1 : b[0] - a[0]);
        } else {
            jobs.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
            now = jobs.at(-1)[0];
        }
        
        const [request, process] = jobs.pop();
        const end = now + process;
        times.push(end - request);
        now = end;
    }
    return Math.floor(times.reduce((acc, cur) => acc + cur, 0) / times.length);
} 