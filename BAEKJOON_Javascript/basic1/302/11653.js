/*
    소인수 분해
    - 1은 아무것도 안 나와야 함.

    1. N 이하의 소수 구하기
        > 에라어쩌고 체 사용하되, n의 약수가 아니면 false 처리
        > 배열을 0부터 N까지 숫자로 채움.
        > false가 되면 0으로 값 바꿈.
        > false인 거 제외하고 필터 걸어서 반환
    2. while N을 조건으로 반복
        > 배열의 마지막요소로 나누어 떨어지는지?
            > 나누어 떨어지면 result에 push
            > 안 나누어 떨어지면 pop
    3. result pop
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(+line);
});

function solution(num) {
    let primes = getPrimeFactor(num);
    let results = [];

    while (num > 1) {
        let prime = primes.pop();
        
        while (num % prime) {
            prime = primes.pop();
        } 

        results.push(prime);
        primes.push(prime);

        num /= prime;
    }

    while (results.length) {
        console.log(results.pop());
    }
}

function getPrimeFactor(num) {
    let arr = [ ...Array(num + 1).keys() ];
    for (let i = 2; i * i <= num; i++) {
        if (!arr[i]) continue;

        for (let j = i * i; j <= num; j += i) {
            arr[j] = 0;
        }
    }

    return arr.filter(i => i > 1 && !(num % i));
}