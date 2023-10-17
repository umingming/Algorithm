/*
    입국 심사
    
    1. times 배열 형태로 변경 [걸리는 시간, 가능한 시간]
    1. while 반복 n이 있을 때 까지.
        1) times 예측 시간 기준으로 오름차순 정렬
        2) 첫 번째 요소의 가능한 시간 += 걸리는 시간
*/
function solution(n, times) {
    const evaluations = times.map(time => new Evaluation(time));
    while (n) {
        evaluations.sort((a, b) => a.endTime - b.endTime)
        evaluations[0].evaluate();
        n--;
    }
    return Math.max(...evaluations.map(evaluation => evaluation.startTime));
}

class Evaluation {
    #startTime = 0;
    constructor(time) {
        this.time = time;
    }
    evaluate() {
        this.#startTime += this.time;
    }
    get startTime() {
        return this.#startTime;
    }
    get endTime() {
        return this.#startTime + this.time;
    }
}