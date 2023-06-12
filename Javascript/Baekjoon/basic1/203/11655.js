/*
    단어 길이 구하기

    1. 입력 모듈 정의
    2. solution
        > result 변수 선언
        > 길이만큼 반복
            > 해당 글자가 소문자인지?
                > rot13WithLowerCase
                > 대문자면 rot13WithUpperCase
            > 그 외는 그냥 result에 추가함.
    3. rot13
        > charCode로 구해서 + 13 더한 값이 소문자인지?
        > 아니면 charCode - 13해서 반환함.
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line);
});

function solution(line) {
    let result = "";
 
    for (let char of line) {
        if (/[a-z]/.test(char)) {
            result += rot13(char, 'z');
        } else if (/[A-Z]/.test(char)) {
            result += rot13(char, 'Z');
        } else {
            result += char;
        }
    }
    
    console.log(result);
}

function rot13(char, lastChar) {
    let lastCharCode = lastChar.charCodeAt(0);
    let charCode =  char.charCodeAt(0) + 13;

    if (charCode > lastCharCode) {
        charCode = char.charCodeAt(0) - 13;
    }

    return String.fromCharCode(charCode);
}