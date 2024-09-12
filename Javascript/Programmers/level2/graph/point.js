function solution(k, d) {
    const count = Math.floor(d / k) + 1;
    let length = 0;
    
    
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            if ((i * k) ** 2 + (j * k) ** 2 > d ** 2) {
                break;
            }
            length++;
        }
    }

    return length;
}