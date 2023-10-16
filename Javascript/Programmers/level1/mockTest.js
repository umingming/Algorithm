function solution(answers) {
    function getScore(strategy) {
        const {length} = answers.filter((answer, i) => answer === strategy[i % strategy.length]);
        return length;
    }
    const scoreA = getScore([1, 2, 3, 4, 5]);
    const scoreB = getScore([2, 1, 2, 3, 2, 4, 2, 5]);
    const scoreC = getScore([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);
    const maxScore = Math.max(scoreA, scoreB, scoreC);
    return [scoreA, scoreB, scoreC].reduce((acc, cur, index) => {
        if (cur === maxScore) {
            acc.push(index + 1);
        }
        return acc;
    }, []);
}
