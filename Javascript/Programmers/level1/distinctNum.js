function solution(arr) {
    let num;
    const answer = arr.reduce((acc, cur) => {
       if (num !== cur) {
           acc.push(cur);
           num = cur;
       }
        return acc;
    }, [])    
    return answer;
}
