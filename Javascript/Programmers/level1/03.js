/*
    로봇 강아지 도착 위치 구하기
    - S: 시작 지점, X: 장애물

    1. position 정의
        1) 0번째 요소에 park에서 S를 포함하는 index 할당
        2) park의 index번째 요소 중 S의 index를 1번째 요소에 할당
    2. routes 반복
        1) 이동 위치가 X인지? continue;
        2) position 이동
    3. postion 반환
*/
function solution(park, routes) {
    let h = park.findIndex(i => i.includes("S"));
    let w = park[h].indexOf("S");
    let position = [h, w];

    for (const route of routes) {
        goRoute(route);
    }

    function goRoute(route) {
        const op = route.at(0);
        let n = +route.at(-1);

        while (n--) {
            move(op);
            if (!isValidPosition()) {
                h = position[0];
                w = position[1];
                return;
            }
        }
        position = [h, w];
    }

    function move(op) {
        switch(op) {
            case "N":
                --h;
                break;
            case "S":
                ++h;
                break;
            case "W":
                --w;
                break;
            case "E":
                ++w;
                break;
        }
    }

    function isValidPosition() {
        return ["S","O"].includes(park[h]?.[w]);
    }

    return position;
}