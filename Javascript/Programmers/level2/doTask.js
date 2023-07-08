/*
    과제 진행하기
    - 새로 시작하는 과제 > 가장 최근에 멈춘 과제
    
    1. plans를 일찍 시작하는 순서로 sort하기
    2. 끝나는 시간 계산해서 마지막 요소에 추가
    3. 다음 과제 시간 확인 후 남은 시간 계산해서 stops에 추가
    4. 과제가 끝난 건 첫번째 요소만 anser에 넣기
    
*/
function solution(plans) {
    const completedTasks = [];
    const inProgressTasks = [];
    
    function transformMin(time) {
        const [hour, min] = time.split(":").map(i => +i);
        return hour * 60 + min;
    }
    
    function getEndTime(start, playTime) {
        let hour = +start.split(":")[0];
        let min = +start.split(":")[1] + +playTime;
        hour += Math.floor(min / 60);
        return `${hour}:${min % 60 || "00"}`;
    } 
    
    function doTask(a, b) {
        if (a[3] === b[1]) {
            completedTasks.push(a);
        } else if (a[3] < b[1]) {
            completedTasks.push(a);
            if (inProgressTasks.length > 0) {
                const task = inProgressTasks.pop();
                task[1] = a[3];
                task[3] = getEndTime(task[1], task[2]);
                doTask(task, b);
            }
        } else if (a[3] > b[1]) {
            a[2] -= (transformMin(b[1]) - transformMin(a[1]));
            inProgressTasks.push(a);
        }
    }
    
    plans.sort((a, b) => a[1] > b[1] ? -1 : 1);
    
    while (plans.length || inProgressTasks.length) {
        const task = plans.pop() || inProgressTasks.pop();
        const next = plans.at(-1) || inProgressTasks.at(-1);
        task[3] = getEndTime(task[1], task[2]);
        
        if (next) {
            doTask(task, next);
        } else {
            completedTasks.push(task);
        }
    }
    
    return completedTasks.map(i => i[0]);
}