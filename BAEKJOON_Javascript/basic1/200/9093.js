/*
    단어 뒤집어 출력하는 프로그램; 첫 번째에 cnt 주어짐.
    ex) I am happy today -> I ma yppah yadot

    1. 입력 모듈 정의
    2. cnt, words, result 선언
    3. if cnt가 undefined인지?
        > cnt에 line 할당
        > 아니면, reverse 호출 후 cnt--;
    4. if cnt가 0인지? close
    5. reverse(line)
        > line을 쪼개서 words에 할당함.
        > words forEach 람다식
            > 단어 길이만큼 반복
                > result에 word[word.length - i - 1] 추가
            > 공백 추가
    6. result 콘솔
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cnt;
let result = '';

rl.on("line", (line) => {
    if (cnt === undefined) {
        cnt = line;
    } else {
        reverse(line);
        cnt--;
    }

    if (cnt === 0) rl.close();
});

rl.on("close", () => {
    console.log(result);
    process.exit();
})

// function reverse(line) {
//     let words = line.split(" ");
//     words.forEach(word => {
//         for(let i = 0; i < word.length; i++) {
//             result += word[word.length - 1 - i];
//         }
//         result += ' ';
//     })
//     result += '\n';
// }

function reverse(line) {
    const words = line.split(' ');
    words.forEach(word => {
        let reverseWord = word.split('').reverse().join('');
        result += reverseWord + ' ';
    })
    result += '\n';
}