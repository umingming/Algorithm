/*
    입국 심사
    
    1. times 배열 형태로 변경 [걸리는 시간, 가능한 시간]
    1. while 반복 n이 있을 때 까지.
        1) times 예측 시간 기준으로 오름차순 정렬
        2) 첫 번째 요소의 가능한 시간 += 걸리는 시간
*/
function solution(n, times) {
    const evaluations = times.sort().map(time => new Evaluation(time));
    let index = 0;

    while (n) {
        const left = evaluations.slice(0, index);
        const right = evaluations.slice(index);

        let tempIndex = left.findIndex(evaludation => evaludation.isEvaluable);
        if (tempIndex === -1) {
            tempIndex = right.findIndex(evaludation => evaludation.isEvaluable) + index;
        }
        if (tempIndex === index -1) {
            tempIndex
            index = right.findIndex(evaludation => evaludation.isEvaluable);
        }
    }
    return Math.max(...evaluations.map(evaluation => evaluation.startTime));
}

class Evaluation {
    #startTime = 0;
    totalTime = 0;

    constructor(time) {
        this.time = time;
    }
    evaluate() {
        this.#startTime += this.time;
        Evaluation.totalTime = this.#startTime;
    }
    isEvaluable() {
        return Evaluation.totalTime >= this.#startTime;
    }
    get startTime() {
        return this.#startTime;
    }
    get endTime() {
        return this.#startTime + this.time;
    }
}