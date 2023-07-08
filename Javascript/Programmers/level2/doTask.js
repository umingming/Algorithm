/*
    과제 진행하기
    - 새로 시작하는 과제 > 가장 최근에 멈춘 과제
    
    1. plans를 일찍 시작하는 순서로 sort하기
    2. 끝나는 시간 계산해서 마지막 요소에 추가
    3. 다음 과제 시간 확인 후 남은 시간 계산해서 stops에 추가
    4. 과제가 끝난 건 첫번째 요소만 anser에 넣기
    
*/
function solution(plans) {
    const stops = [];
    const result = [];
    
    function transformMin(time) {
        const [hour, min] = time.split(":").map(i => +i);
        return hour * 60 + min;
    }
    
    function getEndTime(start, playTime) {
        const toTwoDigits = (num) => (num + "").padStart(2, "0");
        let hour = +start.split(":")[0];
        let min = +start.split(":")[1] + +playTime
        
        hour += Math.floor(min / 60);
        return `${toTwoDigits(hour)}:${toTwoDigits(min % 60)}`;
    } 
    
    plans.sort((a, b) => a[1] > b[1] ? -1 : 1);
    
    while (plans.length) {
        const plan = plans.pop();
        const next = plans.at(-1);
        plan[3] = getEndTime(plan[1], plan[2]);
        
        if (!next || plan[3] < next[1]) {
            const stop = stops.pop();
            if (stop) {
                stop[1] = plan[3];
                plans.push(stop);
            }
            result.push(plan[0]);
        } else if (plan[3] === next[1]) { 
            result.push(plan[0]);
        } else { 
            plan[2] -= (transformMin(next[1]) - transformMin(plan[1]));
            stops.push(plan);
        }
    }
    return result;
}