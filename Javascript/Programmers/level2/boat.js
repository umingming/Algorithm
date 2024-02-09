/*
    구명보트
    
    1. 무거운 순으로 정렬
    2. boats 배열 선언
    3. while people 길이 조건으로 반복
        > pop 하여 weight 선언
        > if weight이 limit의 반보다 크면 그냥 boats에 weight push
        > 작을 경우 index 가져와서 해당 boat에 무게 더함
    4. boats 길의 반환
*/
function solution(people, limit) {
    people.sort((a, b) => a - b)
    const boats = [];
    let index = 0;
    
    while (index < people.length) {
        const weight = people.pop();
        if (weight + people[index] > limit) {
            boats.push(weight);
        } else {
            boats.push(weight + people[index]);
            index++;
        }
    }
    
    return boats.length
}