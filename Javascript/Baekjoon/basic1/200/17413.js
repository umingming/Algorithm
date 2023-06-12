/*
    단어 뒤집기

    1. 입력 모듈 선언
    2. solution 호출
        > line을 '>' 기준으로 쪼개 phrases 배열에 할당
        > phrases 반복
        > if '<'를 포함하는지? 쪼개서 0번째 요소를 공백 기준으로 쪼개기
            > reverse 후 '<'로 join
        > parases 조인해서 출력


    
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line);
    rl.close();
});

rl.on("close", () => {
    process.exit();
})

function solution(line) {
    let phrases = line.split('>');

    for (let i in phrases) {
        if (phrases[i].includes('<')) {
            let phrase = reverse(phrases[i].split('<')[0])
            let tag = phrases[i].split('<')[1];

            phrases[i] = `${phrase}<${tag}`;
        } else {
            phrases[i] = reverse(phrases[i]);
        }
    }

    console.log(phrases.join('>'));
}

function reverse(phrase) {
    let words = phrase.split(' ');

    return words.map(i => i.split('').reverse().join(''))
                .join(' ');
}