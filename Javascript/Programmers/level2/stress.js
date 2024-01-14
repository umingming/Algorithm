/*
    피로도
    - 소모 필요도 작은 순, 최소 필요 피로도 작은 순으로 정렬
    
    1. 필요 피로도와 소모 피료도의 차가 작은 순으로 정렬
    2. result 변수 정의
    3. while 던전 크기가 있음을 기준으로 반복
    4. 던전을 pop해서 최소 필요 피로도 충족하는지 확인, 안 되면 pass
*/
function solution(k, dungeons) {
    dungeons.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    let result = 0;
    
    while (dungeons.length) {
        const [min, target] = dungeons.pop();
        if (k >= min) {
            k -= target;
            result++;
        }
    }
    
    return result;
}