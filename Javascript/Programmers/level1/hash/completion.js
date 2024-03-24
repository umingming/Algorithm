function solution(participants, completions) {
    participants.sort((a, b) => a > b ? -1 : 1);
    completions.sort((a, b) => a > b ? -1 : 1);
    
    let participant = participants.pop();
    let completion = completions.pop();
    while (participant === completion) {
        participant = participants.pop();
        completion = completions.pop();
    }
    
    return participant;
}