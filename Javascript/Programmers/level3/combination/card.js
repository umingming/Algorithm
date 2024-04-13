/*
    n+1 카드게임; 조합
    - 가능한 최대 경우: n/3 + 1 -> 내가 가진 카드가 충분하고, 돈이 있는 경우
    - 최소 경우: 내가 가진 카드에 n+1조합이 없고, 앞으로 2개로 충족되지 않음. 1
    
    1. cards를 조합해 cardConfig객체를 만든다.
        > key는 요소의 값이며 value는 요소의 인덱스, 상대 값, 해당 index이다.
        > 상대 값이 이미 객체에 있는 경우는 index를 구하지 않고 해당 key의 0번째 요소를 할당한다.
    2. 가능한 최대 경우의 수를 구해 max를 정의한다; cards.length/3 + 1
    3. cards를 n/3만큼 복사해 내 배열을 만든다.
    4. index를 정의한다; rest기준이므로 첫 초기화값은 n/3 + 1이다.
    5. result를 1로 선언한다 let
    6. index가 rest의 길이보다 작을 때까지를 기준으로 반복한다.
        > 내가 가진 카드의 n+1 조합 갯수를 구한다.
            > 내 인덱스보다 타겟 인덱스가 더 클 때 ++ 해서 반환하는 거로 reduce
        > total + result + 1이 max와 같으면 max 반환한다.
        > rest[index++]의 타겟 인덱스에 해당하는 것을 내가 가지고 있는지?
            > 안 가지고 있으면, 이 인덱스와의 차이가 내 조합 갯수내에 있는지?
            > 그 경우엔 해당 값을 추가하고, 아니면 0을 추가한다.
        > 위를 반복하고
        > result++;
*/
function solution(coin, cards) {
    const { length } = cards;
    const cardConfig = cards.reduce((acc, cur, i) => {
        const target = length - cur + 1;
        if (acc[target]) {
            acc[cur] = [i, target, acc[target][0]];
        } else {
            const j = cards.findIndex(card => card === target)
            acc[cur] = [i, target, j];
        }
        return acc;
    }, {})
    const max = length / 3 + 1;
    const mine = cards.slice(0, max - 1);
    let index = max - 1;
    let result = 1;
    
    function validateTarget(card, combo) {
        const config = cardConfig[card];
        if (config[2] < index) {
            if (mine[config[2]] && coin) {
                coin--;
                combo.push([card, config[1]])
                mine.push(card);
            } else {
                mine.push(0);
            }
        } else if (config[2] - index <= combo.length * 2 + 1 && coin){
            coin--;
            mine.push(card);    
        } else {
            mine.push(0);
        }
    }
    
    while (index < length) {
        const combo = mine.reduce((acc, cur, i) => {
            if (cur) {
                const targetIndex = cardConfig[cur][2];
                if (mine[targetIndex] && targetIndex < index && targetIndex > i) {
                    acc.push([cur, cardConfig[cur][1]]);
                }
            }
            return acc;
        }, [])
        
        if (combo.length + result + 1 === max) {
            return max;
        }
        
        validateTarget(cards[index++], combo);
        validateTarget(cards[index++], combo);
        
        if (combo.length) {
            mine[cardConfig[combo[0][0]][0]] = 0;
            mine[cardConfig[combo[0][1]][0]] = 0;
        } else {
            return result;
        }
        result++;
    }
    
    return result;
}