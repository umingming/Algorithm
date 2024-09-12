function solution(k, d) {
    const count = Math.floor(d / k) + 1;
    let length = 0;
    
    
    for (let i = 0; i < count; i++) {
        const x = i * k;
        const maxY = Math.floor(Math.sqrt(d ** 2 - x ** 2) / k);
        length += maxY + 1; 
    }

    return length;
}