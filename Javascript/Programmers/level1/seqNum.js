/*
    연속된 수의 합
    - total/0.5num = i의 값 + num-i-1의 값
    - num-i-1의 값 = i의 값 + num-i-1-i
    - total/0.5num = i의 값*2 + num-i-1 
    - total = num*i의 값 + 0.5num^2 - 0.5num*i - 0.5num
    - i의 값=total/num-0.5num+i+0.5 (1+i-num)/2
    
    1. 몫을 구하기
    2. num을 길이로 하는 배열 반환
*/

function solution(num, total) {
    const quotient = total / num;
    return Array.from({length: num}, (_, i) => quotient + i - (num - 1) / 2);
}