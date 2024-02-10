/*
    도넛과 막대 그래프
    1. edges를 평탄화해서 최대값을 구하고, 이 값 + 1을 길이로 하는 이차 배열 graph 선언
    2. edges 반복
        > [start, end]로 edges 배열을 정의
        > graph[start][end] = 1로 초기화
    3. graph에서 1이 제일 많은 row의 index가 정점 point
    4. 도넛 모양 그래프인지 확인하는 함수 정의; index를 인자로 받음
        > graph[index]중 1인 값이 하나인지? 아니면 false;
        > let target을 graph[index]의 1의 자리로 하고
        > while target이 index와 동일함을 조건으로
            > graph[target]의 1인 값이 하나인지? 
            > 위의 내용 반복
        > true 반환
    5. 막대 모양 그래프
        > graph[index] 중 1인 값이 하나이거나 없는지? 
    6. 8자 모양 그래프
        > graph[index] 중 1인 값이 하나이거나 2인지?
    7. point의 값을 반복해서 그래프를 확인한다
*/
function solution(edges) {
    const max = Math.max(...edges.flat(2));
    const graph = Array.from({length: max + 1}, () => Array(max + 1).fill(false));
    
    for (const [start, end] of edges) {
        graph[start][end] = true;
    }
    
    const [point] = graph.reduce((acc, cur, index) => {
        const { length } = cur.filter(flag => flag);
        return acc[1] < length ? [index, length] : acc;
    }, [0, 0])
    
    function checkDonut(index) {
        let target = 0;
        while (target !== index) {
            const { length } = graph[target || index].filter(flag => flag);
            if (length !== 1) return false;
            target = graph[target || index].findIndex(flag => flag);
        }
        return true;
    }
    
    function checkBar(index) {
        let target = 0;
        while (target !== index) {
            const { length } = graph[target || index].filter(flag => flag);
            if (length > 1) return false
            if (length === 0) return true;
            target = graph[target || index].findIndex(flag => flag)
        }
        return false;
    }
    
    function checkPie(index) {
        let target = 0;
        while (target !== index) {
            const { length } = graph[target || index].filter(flag => flag);
            if (length === 0) return false;
            if (length === 2) return true;
            target = graph[target || index].findIndex(flag => flag)
        }
        return true;
    }
    
    const result = [point, 0, 0, 0];
    
    for (let i = 0; i < max + 1; i++) {
        if (!graph[point][i]) continue;
        if (checkDonut(i)) result[1]++;
        else if (checkBar(i)) result[2]++;
        else if (checkPie(i)) result[3]++;
    }
    
    return result;
}