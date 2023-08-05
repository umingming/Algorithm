function solution(dartResult) {
    const pattern = /(\d+)(S|D|T)[*#]?/g;
    const darts = dartResult.match(pattern);
    const bonusMap = {
        S: 1,
        D: 2,
        T: 3,
    }
    
    const scores = darts.reduce((acc, cur) => {
        const pattern = /(\d+)(S|D|T)([*#]?)/;
        const [_, num, bonus, option] = cur.match(pattern);
        let score = num ** bonusMap[bonus];
        
        if (option === "*") {
            score *= 2;
            if (acc.at(-1)) {
                const lastScore = acc.pop() * 2;
                acc.push(lastScore);
            }
            
        } else if (option === "#") {
            score *= -1;
        }
        
        acc.push(score);
        return acc;
    }, [])
    
    return scores.reduce((acc, cur) => acc + cur, 0);
}