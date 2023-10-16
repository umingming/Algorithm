/*
    옹알이
    - aya, ye, woo, ma
    
*/
function solution(babbling) {
    const pattern = /^(aya|ye|woo|ma)+$/;
    const { length } = babbling.filter(i => i.match(pattern));
    return length;
}