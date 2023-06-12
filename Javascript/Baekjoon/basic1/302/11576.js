/*
    진법 변환

    1. A 진법으로 나타내기
        > toString(A)
    2. 10 진법으로 변환
        > parseInt(A)
    3. B 진법으로 변환
        > toString(B)
        > split
    4. 알파벳을 숫자로 표현
        > parseInt(B)
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let A;
let B;
let cnt;

rl.on("line", (line) => {
    if (A === undefined) {
        [A, B] = line.split(" ").map(i => +i);
    } else if (cnt === undefined) {
        cnt = +line;
    } else {
        solution(line);
    }
});

function solution(line) {
    let input = line.split(" ").map(i => (+i).toString(A)).join("");
    let output = parseInt(input, A).toString(B).split("").map(i => parseInt(i, B));

    console.log(output.join(" "));
}
