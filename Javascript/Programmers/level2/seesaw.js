/*
    시소 짝궁 구하기
    - 몫이 1, 2/3, 2/4, 3/4
    
    1. count 정의
    2. weights 오름차순 정렬
    3. while weights의 길이가 2 이상
        1) weights pop하여 기준 잡음.
        2) weights reduce로 시소쌍 반환
    4. count 반환
    
*/
function solution(weights) {
    let count = 0;
    const rates = [3/2, 4/2, 4/3]
    weights.sort((a, b) => a - b);
    
    while (weights.length > 1) {
        const weight = weights.pop();
        let lengthByWeight = 1;
        
        while (weights.at(-1) === weight) {
            weights.pop();
            lengthByWeight++;
        }
        count += lengthByWeight * (lengthByWeight - 1) / 2;
        
        const { length } = weights.filter(i => rates.includes(weight / i));
        count += length * lengthByWeight;
    }
    return count;
}