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
const { reverse } = require("dns");
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
    console.log(`<${results.join(', ')}>`);

    process.exit();
})

function solution(line) {
    let phrases = line.split('>');

    for (let i of phrases) {
        if (i.include('<')) {
            let phrase = 
             = reverse(i.split('<')[0])
        }
    }
    let n = line.split(' ')[0];
    let k = line.split(' ')[1] - 1;
    let nums = Array.from({length:n}, (i, index) => index + 1); 
    let index = k;

    for (let i = 0; i < n; i++) {
        if (index >= nums.length) {
            index %= nums.length;
        }

        results.push(nums[index]);
        nums.splice(index, 1);

        index += k;
    }
}
