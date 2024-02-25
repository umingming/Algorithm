function solution(dirs) {
    const pathSet = new Set();
    let x = 5;
    let y = 5;
    let result = 0;
    
    for (const dir of dirs) {
        let newX = x;
        let newY = y;
        
        switch (dir) {
            case "L":
                newX = Math.max(0, x - 1);
                break;
            case "R":
                newX = Math.min(10, x + 1);
                break;
            case "U":
                newY = Math.min(10, y + 1);
                break;
            case "D":
                newY = Math.max(0, y - 1);
                break;
        }
        
        if ((x !== newX || y !== newY) && !pathSet.has([x, y, newX, newY].join())) {
            result++;
        }
        
        pathSet.add([x, y, newX, newY].join());
        pathSet.add([newX, newY, x, y].join());
        
        x = newX;
        y = newY;
    }
    
    return result;
}