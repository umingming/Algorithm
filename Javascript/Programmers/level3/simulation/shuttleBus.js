/*
    1. 분으로 환산하는 함수 정의
    2. n을 length로 하는 배열 선언
        > 하나의 요소는 [seat, time]인 배열이다
    3. timetable을 1의 함수로 재정의 후 오름차순 정렬
    4. timetable 반복; 
        > seat이 있는 배열의 seat--
    5. 마지막배열부터 값이 있는 것의 time 반환
*/
function solution(n, t, m, timetable) {
    function transformMin(timeString) {
        const [hour, min] = timeString.split(":").map(num => +num);
        return hour * 60 + min;
    }
    
    function padWithZero(num) {
        return String(num).padStart(2, 0);
    }
    
    const start = transformMin("09:00");
    const busConfigs = Array.from({length: n}, (_, index) => {
        return [m, start + index * t, []];
    });
    const crewConfigs = timetable.map(transformMin).sort((a, b) => a - b);
    
    for (const config of crewConfigs) {
        const index = busConfigs.findIndex(([seat, time]) => seat && time >= config);
        if (index > -1) {
            busConfigs[index][0]--;
            busConfigs[index][2].push(config);
        }
    }
    
    const lastConfig = busConfigs.pop();
    const maxTime = lastConfig[0] ? lastConfig[1] : Math.max(...lastConfig[2]) - 1;
    
    const hour = padWithZero(Math.floor(maxTime / 60))
    const min = padWithZero(maxTime % 60)
    return `${hour}:${min}`;
}